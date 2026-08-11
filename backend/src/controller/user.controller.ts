import asyncHandler from "../middleware/asyncHandler";
import UserModel from "../models/user.model";
import AppError from "../utils/appError";
import { deleteFromCloudinary } from "../utils/deleteFromCloudinary";
import UploadToCloudinary from "../utils/UploadToCloudinary";
import { UpdateProfileSchema } from "../validations/profile";

export const UpdateProfile = asyncHandler(async (req, res) => {

    const userId = req.userId;

    const ValidatedData = UpdateProfileSchema.safeParse(req.body);

    if (!ValidatedData.success) {
        throw new AppError("Invalid credentials", 400);
    }

    const { firstname, lastname, email } = ValidatedData.data;

    const profileFile = req.file?.path;

    //find the user if it exists 
    const user = await UserModel.findById(userId);

    if (!user) {
        throw new AppError("Unathorized access", 401);
    }

    //if user exists then update only those fields who are coming

    if (firstname !== undefined) {
        user.firstname = firstname;
    }

    if (lastname !== undefined) {
        user.lastname = lastname;
    }

    if (email !== undefined) {
        user.email = email;
    }

    let oldPictureId = user.profilePictureId;

    if (profileFile) {

        const uploadResult = await UploadToCloudinary(profileFile, "profile");

        user.profilePicture = uploadResult.secure_url;
        user.profilePictureId = uploadResult.public_id;

    }

    await user.save();

    //now delete the old file 
    if (profileFile &&  oldPictureId) {
        await deleteFromCloudinary(oldPictureId);
    }

    res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        user
    })

})