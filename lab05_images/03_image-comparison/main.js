const imagePaths = [
  "images/FS-5461_07.jpg",
  "images/FS-5497_04.jpg",
  "images/FS-5497_08.jpg",
  "images/FS-5839_06.jpg",
  "images/FS-5840_02.jpg",
  "images/FS-5967_04.jpg",
  "images/FS-7320_19.jpg"
];

// Load images
async function loadImages(paths) {
  try {
    const images = await Promise.all(paths.map(path => Jimp.read(path)));
    // resize images proportionally before comparision
    images.forEach(image => image.resize(256, Jimp.AUTO));
    // log success message
    console.log('Images loaded successfully');
    return images;
  } catch (error) {
    console.error('Error loading images:', error);
  }
}

// Compare images
function compareImages(images) {
  images.forEach((image, index) => {
    // compare each image with all other images
    images.slice(index + 1).forEach((otherImage, otherIndex) => {
      // calculate distance and difference between images
      const distance = Jimp.distance(image, otherImage);
      const diff = Jimp.diff(image, otherImage);
      console.log(`Distance between image ${index + 1} and image ${otherIndex + index + 2}: ${distance}`);
      console.log(`Difference between image ${index + 1} and image ${otherIndex + index + 2}: ${diff.percent}`);
    });
  });
}

// Find the most similar images and store them in an array
function findMostSimilarPair(images) {
  let mostSimilarPair = [];
  let lowestDistance = 1;
  images.forEach((image, index) => {
    images.slice(index + 1).forEach((otherImage, otherIndex) => {
      const distance = Jimp.distance(image, otherImage);
      if (distance < lowestDistance) {
        lowestDistance = distance;
        mostSimilarPair = [image, otherImage];
      }
    });
  });
  return mostSimilarPair;
}

// Display the most similar pair of images as thumbnails
function displayMostSimilarPair(images) {
  const similarPair = findMostSimilarPair(images);
  // show the most similar pair of images in the browser
  similarPair.forEach((image, index) => {
    image.getBase64(Jimp.MIME_JPEG, (err, src) => {
      if (err) {
        console.error('Error displaying image:', err);
      } else {
        const img = document.createElement('img');
        img.src = src;
        document.body.appendChild(img);
      }
    });
  });
}

// Main function to load, compare, and display images
async function main() {
  const images = await loadImages(imagePaths);
  if (images) {
    displayMostSimilarPair(images);
  }
}

// Call the main function
main();