const Jimp = require('jimp');

const resizedImage = async (imagePath,destinationPath,width,height) => {
    
    try {
        // Read the image from the given path
        const image = await Jimp.read(imagePath);

        // get the current date
        const date = new Date();

        // Load a font to use when adding the date to the image
        const font = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);

        // Resize the image while maintaining its aspect ratio and filling the remaining space with a black background
        // Add the current date to the top left corner of the resized image
        // Write the resized image to the destination path
        image.contain(width, height, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE)
            .print(font, 10, 10, `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
            .write(destinationPath);
        
    } catch (error) {
        console.log(error)
    }  
}

module.exports = resizedImage;