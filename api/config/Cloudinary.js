import {v2 as cloudinary} from "cloudinary";
import {dotenv} from 'dotenv';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure : true
})
/*
const uploadImage = async (filePath) =>{
    return await cloudinary.uploader.upload(filePath,{
        folder: "products"
    })
}

const deleteImage = async (publicId) =>{
    return await cloudinary.uploader.destroy(publicId)
}

export {uploadImage, deleteImage};*/
export default cloudinary;