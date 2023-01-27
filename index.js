const image = document.querySelector("#image");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=eiCCVwTsJ7uWKA9Hyc9TZ8Wosb2FzmhW&s=cats",
  {
    mode: "cors",
  }
)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    image.src = response.data.images.original.url;
  });
