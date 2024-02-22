import { updateDatas } from "./firebase";

const modalImgBack = document.querySelector(".modal-img-back");
const modalImg = document.querySelector(".modal-img-win");
const images = document.querySelectorAll("img");
const video = document.querySelectorAll("video");
const modalVid = document.querySelector(".movie-container");
const htmlImgs = document.querySelectorAll(".htmlImg");
const kateBox = document.querySelector(".kate-box");

const pTag = document.createElement("p");
const textNode = document.createTextNode(`
좋아요
`);

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", () => {
    // console.log(images.length)
    // Create a new image element
    const clickedImage = document.createElement("video");
    const clickedVideo = document.createElement("video");
    // 추가
    const clickedHtml = document.createElement("img");
    clickedHtml.classList.add("htmlImg");
    const clickedImg = document.createElement("img");
    //
    clickedImage.src = video[i].src;
    // 추가
    clickedImg.src = images[i].src;
    // clickedHtml.src = shuffledhtmlUrls[i]
    //

    clickedVideo.classList.add("modal-video");
    clickedImage.autoplay = true;
    clickedImage.controls = true;
    // Clear the modal content before appending a new image
    modalImg.innerHTML = "";

    // Append the clicked image to the modal
    modalImg.appendChild(clickedImage);

    // modalImg.appendChild(clickedImg)

    modalImg.appendChild(clickedHtml);
    modalImg.appendChild(pTag);
    pTag.appendChild(textNode);
    pTag.classList.add("goodMovie");
    pTag.addEventListener("click", async () => {
      await updateDatas();
    });

    // Display the modal
    modalImgBack.style.display = "block";
    modalImg.style.display = "block";
    // document.querySelector(".htmlImg").style.display= "block"
    document.querySelector("video").style.display = "block";

    modalImgBack.addEventListener("click", (event) => {
      if (event.target === modalImgBack) {
        modalImgBack.style.display = "none";
        document.querySelector(".htmlImg").style.display = "none";
        // htmlImgs[i].parentNode.removeChild(htmlImgs[i]);
        // modalImgBack.forEach((img) => {
        // });
      } else {
        document.querySelector("video").style.display = "block";
        // clickedHtml.parentNode.removeChild(clickedHtml);
        // document.querySelector(".htmlImg").style.display = "none"
        // modalImg.appendChild(clickedHtml);
        // console.log(clickedImg)
      }
    });
  });
}

// modalImgBack.addEventListener("click",()=>{
//     modalImgBack.style.display = "none";
// })

// for (let i = 0; i < images.length; i++) {
//     images[i].addEventListener("mouseover", () => {

//         // Create a new image element
//         const clickedImage = document.createElement("video");
//         const clickedVideo = document.createElement("video")
//         clickedImage.src = video[i].src;
//         console.log(video[i])
//         clickedVideo.classList.add("modal-video");
//         clickedImage.autoplay = true
//         // Clear the modal content before appending a new image
//         modalVid.innerHTML = "";

//         // Append the clicked image to the modal
//         modalVid.appendChild(clickedImage);

//         // Display the modal

//         // modalImgBack.style.display = "block";
//         // modalImg.style.display = "block"
//         document.querySelector("video").style.display= "block"
//     });
// }

// modalImgBack.addEventListener("mouseleave",()=>{
//     modalImgBack.style.display = "none";
// })
