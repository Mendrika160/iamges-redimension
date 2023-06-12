const express = require('express');
const fs = require('fs');
const resizedImage = require('./middleware/resizedImage');
const resizeImagesInDirectory = require('./middleware/resizeImagesInDirectory');
require('dotenv').config();
const app = express();

// Get the desired width and height from the command line arguments
// const [width, height] = process.argv[2].split('*').map(Number);
// // Get the source and destination paths from the command line arguments
// const sourcePath = process.argv[3];
// const destinationPath = process.argv[4];
const sourcePath = './img';
const destinationPath = './destination';
const width = 500;
const height = 500;
// // Check if the source path is a directory or a file
if (fs.lstatSync(sourcePath).isDirectory()) {
    // If it's a directory, call the resizeImagesInDirectory function to resize all images in that directory
    resizeImagesInDirectory(sourcePath, destinationPath, width, height);
} else {
    // If it's a file, call the resizeImage function to resize that single image
    resizedImage(sourcePath, destinationPath, width, height);
}

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})