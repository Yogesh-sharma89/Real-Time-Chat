import multer, { type FileFilterCallback } from "multer";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import type { Request } from "express";
import { IMAGE_EXTENSIONS, IMAGE_MIME_TYPES } from "../constants/filetype";

const uploadDir = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, {
        recursive: true
    })
}


const storage = multer.diskStorage({

    destination(req, file, callback) {
        callback(null, "uploads");
    },
    filename(req, file, callback) {
        const uniqueSuffix = crypto.randomBytes(16).toString("hex");

        const fileExtension = path.extname(file.originalname).toLowerCase();

        callback(null, `user-${uniqueSuffix}${fileExtension}`)
    },
})

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {

    const isMimeTypeValid = IMAGE_MIME_TYPES.includes(file.mimetype);

    const isFileExtensionValid = IMAGE_EXTENSIONS.includes(path.extname(file.originalname));

    if (!isMimeTypeValid && !isFileExtensionValid) {
        cb(new Error('Invalid file format. Only JPEG, PNG, WEBP , GIF, and AVIF images are allowed.'));
    }

    cb(null,true);
}

export const upload = multer({
    storage,
    fileFilter,
    limits:{
        fileSize:5*1024*1024,
        files:1
    }
})