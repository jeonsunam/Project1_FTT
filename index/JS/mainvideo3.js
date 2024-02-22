// const modalImgBack = document.querySelector(".modal-img-back");
// const modalImg = document.querySelector(".modal-img-win");
// const images = document.querySelectorAll("img");
// const video = document.querySelectorAll("video");
// const modalVid = document.querySelector(".movie-container")
// const htmlImgs = document.querySelectorAll(".htmlImg")
// const kateBox = document.querySelector(".kate-box")
const gallery3 = document.querySelectorAll(".gallery-img3");
console.log(videoUrls1);

// const pTag = document.createElement("p")
// const textNode = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum suscipit corrupti doloremque aperiam, tenetur sapiente sunt ratione officia quidem necessitatibus, numquam voluptatem blanditiis delectus distinctio nulla sed nisi porro.");

for (let i = 0; i < gallery2.length; i++) {
  gallery3[i].addEventListener("click", () => {
    // console.log(images.length)
    // Create a new image element
    const clickedImage = document.createElement("video");
    const clickedVideo = document.createElement("video");
    // 추가
    // const clickedHtml = document.createElement("img")
    // clickedHtml.classList.add("htmlImg")
    const clickedImg = document.createElement("img");
    //

    clickedImage.src = videoUrls3[i];
    // 추가
    clickedImg.src = images[i].src;
    // clickedHtml.src = shuffledhtmlUrls1[i]
    //

    clickedVideo.classList.add("modal-video");
    clickedImage.autoplay = true;
    clickedImage.controls = true;
    // Clear the modal content before appending a new image
    modalImg.innerHTML = "";

    // Append the clicked image to the modal
    modalImg.appendChild(clickedImage);
    modalImg.appendChild(pTag);
    // pTag.appendChild(textNode)

    // modalImg.appendChild(clickedImg)

    // Display the modal
    modalImgBack.style.display = "block";
    modalImg.style.display = "block";
    // document.querySelector(".htmlImg").style.display= "block"
    document.querySelector("video").style.display = "block";

    modalImgBack.addEventListener("click", (event) => {
      if (event.target === modalImgBack) {
        modalImgBack.style.display = "none";
        // document.querySelector(".htmlImg").style.display = "none"
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
