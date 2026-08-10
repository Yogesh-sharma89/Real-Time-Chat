export interface RegisterSchema {
    firstname:string,
    lastname:string,
    email:string,
    password:string,
    profilePicture:string,
    profilePictureId:string,
    authType:string,
    isDeleted:false,
    createdAt?:Date,
    updatedAt?:Date,
}