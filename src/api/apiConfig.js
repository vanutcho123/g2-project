const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "6580844089b7c4151e471988cffca4f7",
  originalImage: imgPath => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: imgPath => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
