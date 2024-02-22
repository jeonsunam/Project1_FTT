const modalImgBack = document.querySelector(".modal-img-back");
const modalImg = document.querySelector(".modal-img-win");
const images = document.querySelectorAll("img");
const video = document.querySelectorAll("video");
const modalVid = document.querySelector(".movie-container");
const htmlImgs = document.querySelectorAll(".htmlImg");

// 이미지 요소에 데이터 속성 추가
images.forEach((img, index) => {
  img.setAttribute("data-type", "image"); // 이미지인 경우 "image"로 표시
});

// 비디오 요소에 데이터 속성 추가
video.forEach((vid, index) => {
  vid.setAttribute("data-type", "video"); // 비디오인 경우 "video"로 표시
});

// HTML 이미지 요소에 데이터 속성 추가
htmlImgs.forEach((htmlImg, index) => {
  htmlImg.setAttribute("data-type", "htmlImg"); // HTML 이미지인 경우 "htmlImg"로 표시
});

// 이미지 클릭 시 모달에 콘텐츠 표시
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modalImg.innerHTML = "";

    const dataType = img.getAttribute("data-type");

    if (dataType === "video") {
      const clickedVideo = document.createElement("video");
      clickedVideo.src = video[index].src;
      clickedVideo.classList.add("modal-video");
      clickedVideo.autoplay = true;
      modalImg.appendChild(clickedVideo);
    } else if (dataType === "htmlImg") {
      const clickedHtml = document.createElement("img");
      clickedHtml.src = shuffledhtmlUrls[index];
      clickedHtml.classList.add("htmlImg");
      modalImg.appendChild(clickedHtml);
    } else {
      const clickedImg = document.createElement("img");
      clickedImg.src = img.src;
      modalImg.appendChild(clickedImg);
    }

    modalImgBack.style.display = "flex";
    modalImg.style.display = "block";
  });
});

modalImgBack.addEventListener("click", (event) => {
  if (event.target === modalImgBack) {
    modalImgBack.style.display = "none";
  }
});
