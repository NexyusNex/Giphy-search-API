const image = document.querySelector("#image");
const cats = document.querySelector("#cats");

function searchImage(url) {
  fetch(url, {
    mode: "cors",
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      image.src = response.data.images.original.url;
    });
}

cats.addEventListener("click", () => {
  const url =
    "https://api.giphy.com/v1/gifs/translate?api_key=eiCCVwTsJ7uWKA9Hyc9TZ8Wosb2FzmhW&s=cats";
  searchImage(url);
});
