const gallery3 = document.querySelectorAll(".gallery-img3");
console.log(videoUrls1);

for (let i = 0; i < gallery2.length; i++) {
  gallery3[i].addEventListener("click", () => {
    const clickedImage = document.createElement("video");
    const clickedVideo = document.createElement("video");

    const clickedImg = document.createElement("img");

    clickedImage.src = videoUrls3[i];
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
