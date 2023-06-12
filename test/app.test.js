const resizedImage = require('../middleware/resizedImage'); // Importez votre fonction de redimensionnement d'image

describe('Test the resizedImage function', () => {
    test('It should resize the image to the specified dimensions', async () => {
        const result = await resizedImage('path/to/image.jpg', 'path/to/resized-image.jpg', 400, 400);
        // Vérifiez que l'image redimensionnée a été créée correctement
    });
});
