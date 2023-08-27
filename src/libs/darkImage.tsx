import React, { useRef, useEffect } from 'react';

const GrayscaleImage = ({ imageUrl }) => {
  // Create a ref for the canvas element
  const canvasRef = useRef(null);

  // Function to convert the image to grayscale
  const convertToGrayscale = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Load the image
    const img = new Image();
    img.src = imageUrl;

    // When the image is loaded, draw it on the canvas in grayscale
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);

      // Convert to grayscale
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        // Calculate grayscale value (average of R, G, and B channels)
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg; // Red channel
        data[i + 1] = avg; // Green channel
        data[i + 2] = avg; // Blue channel
      }

      context.putImageData(imageData, 0, 0);
    };
  };

  // Use useEffect to apply the grayscale effect when the component mounts
  useEffect(() => {
    convertToGrayscale();
  }, [imageUrl]);

  return <canvas ref={canvasRef}></canvas>;
};

export default GrayscaleImage;
