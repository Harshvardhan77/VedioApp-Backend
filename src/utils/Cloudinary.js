import {v2 as cloudinary} from "cloudinary";
import fs from "fs"


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary= async function(localFilePath){
    try {
        if(!localFilePath) return null;
        
        // File uploaded on cloudinary successfully
        const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        });

        console.log("file is upload on clodinary successfully")
        console.log(response.url);
        return response;
    } catch (error) {
        // remove the file from the local server
        fs.unlinkSync(localFilePath);
        return null;
    }

}

export {uploadOnCloudinary}
 