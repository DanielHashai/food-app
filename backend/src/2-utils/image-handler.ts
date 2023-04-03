
import { UploadedFile } from "express-fileupload";
import { v4 as uuid } from "uuid";
import fs from "fs";
import path from 'path';

const URLPATH = path.join(__dirname, '..', '1-assets', 'images');
async function saveImage(image: UploadedFile): Promise<string> {
    const uniqueImageName = createImageName(image.name);

    const absolutePath = URLPATH + uniqueImageName;

    await image.mv(absolutePath);
    return uniqueImageName;
}


function createImageName(originalImageName: string): string {

    // Take original extension: 
    const extension = originalImageName.substring(originalImageName.lastIndexOf("."));

    // Create unique name including original extension (v4 = 36 chars uuid):
    const uniqueImageName = uuid() + extension;

    // Return unique name:
    return uniqueImageName;
}
function getAbsolutePath(imageName: string): string {
    

    let absolutePath = path.join(__dirname, "..", "1-assets", "images", imageName);
    console.log(absolutePath);



    // if (!fs.existsSync(absolutePath)) {
    //     absolutePath = path.join(__dirname, "..", "1-assets", "images", "not-found.png");
    // }
    return absolutePath;
}
export default {
    saveImage,
    getAbsolutePath
}
