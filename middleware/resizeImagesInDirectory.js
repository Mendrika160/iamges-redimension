const fs =  require('fs');
const resizedImage = require('./resizedImage');
const path = require('path');


const resizeImagesInDirectory = async (directoryPath, destinationDirectoryPath, width, height)  => {
    try {
        // Get a list of all files in the directory
        const files = fs.readdirSync(directoryPath);
        // Loop through all files
        for (const file of files) {
            // Check if the file is an image (jpg or png)
            if (file.endsWith('.jpg') || file.endsWith('.png')) {
                // Call the resizeImage function to resize this image
                const fileName = path.basename(file, path.extname(file));
                // Add the _resized suffix to the file name
                const newFileName = `${fileName}_resized${path.extname(file)}`;
                await resizedImage(`${directoryPath}/${file}`, `${destinationDirectoryPath}/${newFileName}`, width, height);
            }
            console.log('image',file)
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = resizeImagesInDirectory;