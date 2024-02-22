const modalImgBack = document.querySelector(".modal-img-back");
const modalImg = document.querySelector(".modal-img-win");
const images = document.querySelectorAll("img");

const pTag = document.createElement("p")
const textNode = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum suscipit corrupti doloremque aperiam, tenetur sapiente sunt ratione officia quidem necessitatibus, numquam voluptatem blanditiis delectus distinctio nulla sed nisi porro.");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", () => {
    // Create a new image element
    const clickedImg = document.createElement("video");
    const clickedImage = document.createElement("video");
    const clickedVideo = document.createElement("video")
    clickedImg.src = images[i].src;
    // console.log(videoDT);
    clickedImage.src = videoData[i];
    // Clear the modal content before appending a new image
    modalImg.innerHTML = "";

    // Append the clicked image to the modal
    // modalImg.appendChild(clickedImg).classList.add("modal-img");
    clickedVideo.classList.add("modal-video");
    clickedImage.autoplay = true
    clickedImage.controls = true

    modalImg.appendChild(clickedImage);
    // modalImg.appendChild(pTag)
    // pTag.appendChild(textNode)
    // Display the modal
    modalImgBack.style.display = "block";
    modalImg.style.display = "block"
    document.querySelector("video").style.display= "block"
  });
}

modalImgBack.addEventListener("click", () => {
  modalImgBack.style.display = "none";
});
