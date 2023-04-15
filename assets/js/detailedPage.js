let thumbnails = document.querySelectorAll(".thumbnail");
let mainImage = document.querySelector(".slider-main-image img");
let prevButton = document.querySelector(".prev-button");
let nextButton = document.querySelector(".next-button");
let currentThumbnailIndex = 0;

thumbnails.forEach(function (thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    let src = this.getAttribute("src");
    mainImage.setAttribute("src", src);
    currentThumbnailIndex = index;
  });
});

prevButton.addEventListener("click", function () {
  currentThumbnailIndex--;
  if (currentThumbnailIndex < 0) {
    currentThumbnailIndex = thumbnails.length - 1;
  }
  let src = thumbnails[currentThumbnailIndex].getAttribute("src");
  mainImage.setAttribute("src", src);
});

nextButton.addEventListener("click", function () {
  currentThumbnailIndex++;
  if (currentThumbnailIndex >= thumbnails.length) {
    currentThumbnailIndex = 0;
  }
  let src = thumbnails[currentThumbnailIndex].getAttribute("src");
  mainImage.setAttribute("src", src);
});
