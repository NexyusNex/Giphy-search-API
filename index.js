const image = document.querySelector("#image");
const cats = document.querySelector("#cats");
const search = document.querySelector("#search");

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
  if (image.style.display != "block") image.style.display = "block";
  const url =
    "https://api.giphy.com/v1/gifs/translate?api_key=eiCCVwTsJ7uWKA9Hyc9TZ8Wosb2FzmhW&s=cats";
  searchImage(url);
});

search.addEventListener("click", () => {
  const input = document.querySelector("#text");
  const error = document.querySelector(".error");
  if (input.value == "") {
    error.textContent = "Search can't be empty!";
    return;
  }
  if (image.style.display != "block") image.style.display = "block";
  error.textContent = "";
  const url =
    "https://api.giphy.com/v1/gifs/translate?api_key=eiCCVwTsJ7uWKA9Hyc9TZ8Wosb2FzmhW&s=" +
    input.value;
  searchImage(url);
});
