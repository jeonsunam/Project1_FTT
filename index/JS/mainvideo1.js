const modalImgBack = document.querySelector(".modal-img-back");
const modalImg = document.querySelector(".modal-img-win");
const images = document.querySelectorAll("img");
const video = document.querySelectorAll("video");
const modalVid = document.querySelector(".movie-container");
const htmlImgs = document.querySelectorAll(".htmlImg");
const kateBox = document.querySelector(".kate-box");
const gallery1 = document.querySelectorAll(".gallery-img");
// console.log(videoUrls1)

const pTag = document.createElement("p");

for (let i = 0; i < gallery1.length; i++) {
  gallery1[i].addEventListener("click", () => {
    const clickedImage = document.createElement("video");
    const clickedVideo = document.createElement("video");

    const clickedImg = document.createElement("img");
    //

    clickedImage.src = videoUrls1[i];
    // 추가
    clickedImg.src = images[i].src;

    clickedVideo.classList.add("modal-video");
    clickedImage.autoplay = true;
    clickedImage.controls = true;

    modalImg.innerHTML = "";

    modalImg.appendChild(clickedImage);
    modalImg.appendChild(pTag);

    modalImgBack.style.display = "block";
    modalImg.style.display = "block";

    document.querySelector("video").style.display = "block";

    modalImgBack.addEventListener("click", (event) => {
      if (event.target === modalImgBack) {
        modalImgBack.style.display = "none";
      } else {
        document.querySelector("video").style.display = "block";
      }
    });
  });
}
