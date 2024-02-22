const slider = document.querySelectorAll(".gallery");
const nextBtn = document.querySelectorAll(".swiper-button-next")
const prevBtn = document.querySelectorAll(".swiper-button-prev")
let startX = 0;
let scrollLeft = 0;
const SCROLL_SPEED = 3;



function doScroll(e){
    e.preventDefault();
    const x = e.pageX
    const move = (x - startX) * SCROLL_SPEED
    slider.scrollLeft = scrollLeft - move
}


for(let i=0; i<3;i++){

    slider[i].addEventListener("mousedown",(e)=>{
        slider[i].addEventListener("mousemove",doScroll)
        slider[i].classList.add("onDrag");
        startX = e.pageX;
        scrollLeft = slider[i].scrollLeft
    })
    
    slider[i].addEventListener("mouseup",()=>{
        slider[i].removeEventListener("mousemove",doScroll)
        slider[i].classList.remove("onDrag")
    })
    
    slider[i].addEventListener("mouseleave",()=>{
        slider[i].removeEventListener("mousemove",doScroll)
        slider[i].classList.remove("onDrag")
    })
    nextBtn[i].addEventListener("click",()=>{
        console.log(slider[i].scrollLeft)
        slider[i].scrollLeft = slider[i].scrollLeft + 697
        // alert("click")
    })
    prevBtn[i].addEventListener("click",()=>{
        console.log(slider[i].scrollLeft)
        slider[i].scrollLeft = slider[i].scrollLeft - 697
        // alert("click")
    })
}



// slider.addEventListener("mousemove",()=>{
//     console.log("mousemove")
// })