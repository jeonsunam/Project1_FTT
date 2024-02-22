$("#modal-kate-open").click(function () {
    $(".modal-kate-back").fadeIn();
  });
  
  $(".modal-kate-close").click(function () {
    $(".modal-kate-back").fadeOut();
  });
  // console.log($(".movie-container"));
  const movieUrls1 = [
    "../../resources/image/공포/horror1.jpg",
    "../../resources/image/공포/horror2.jpg",
    "../../resources/image/공포/horror3.jpg",
    "../../resources/image/공포/horror4.jpg",
    "../../resources/image/공포/horror5.jpg",
    "../../resources/image/공포/horror6.jpg",
    "../../resources/image/공포/horror7.jpg",
    "../../resources/image/공포/horror8.jpg",
    "../../resources/image/공포/horror9.jpg",
    "../../resources/image/공포/horror10.jpg",
    "../../resources/image/스포츠/spo1.jpg",
    "../../resources/image/스포츠/spo2.jpg",
    "../../resources/image/스포츠/spo3.jpg",
    "../../resources/image/스포츠/spo4.jpg",
    "../../resources/image/스포츠/spo5.jpg",
    "../../resources/image/스포츠/spo6.jpg",
    "../../resources/image/스포츠/spo7.jpg",
    "../../resources/image/스포츠/spo8.jpg",
    "../../resources/image/스포츠/spo9.jpg",
    "../../resources/image/스포츠/spo10.jpg",
    "../../resources/image/액션·범죄/cri-and-act1.jpg",
    "../../resources/image/액션·범죄/cri-and-act2.jpg",
    "../../resources/image/액션·범죄/cri-and-act3.jpg",
    "../../resources/image/액션·범죄/cri-and-act4.jpg",
    "../../resources/image/액션·범죄/cri-and-act5.jpg",
    "../../resources/image/액션·범죄/cri-and-act6.jpg",
    "../../resources/image/코미디/medy1.jpg",
    "../../resources/image/코미디/medy2.jpg",
    "../../resources/image/코미디/medy3.jpg",
    "../../resources/image/코미디/medy4.jpg",
    "../../resources/image/코미디/medy5.jpg",
    "../../resources/image/코미디/medy6.jpg",
    "../../resources/image/코미디/medy7.jpg",
    "../../resources/image/코미디/medy8.jpg",
    "../../resources/image/코미디/medy9.jpg",
    "../../resources/image/코미디/medy10.jpg",
  ];
  const videoUrls1 = [
    "../../resources/video/공포/horror1.mp4",
    "../../resources/video/공포/horror2.mp4",
    "../../resources/video/공포/horror3.mp4",
    "../../resources/video/공포/horror4.mp4",
    "../../resources/video/공포/horror5.mp4",
    "../../resources/video/공포/horror6.mp4",
    "../../resources/video/공포/horror7.mp4",
    "../../resources/video/공포/horror8.mp4",
    "../../resources/video/공포/horror9.mp4",
    "../../resources/video/공포/horror10.mp4",
    "../../resources/video/스포츠/spo1.mp4",
    "../../resources/video/스포츠/spo2.mp4",
    "../../resources/video/스포츠/spo3.mp4",
    "../../resources/video/스포츠/spo4.mp4",
    "../../resources/video/스포츠/spo5.mp4",
    "../../resources/video/스포츠/spo6.mp4",
    "../../resources/video/스포츠/spo7.mp4",
    "../../resources/video/스포츠/spo8.mp4",
    "../../resources/video/스포츠/spo9.mp4",
    "../../resources/video/스포츠/spo10.mp4",
    "../../resources/video/액션·범죄/cri-and-act1.mp4",
    "../../resources/video/액션·범죄/cri-and-act2.mp4",
    "../../resources/video/액션·범죄/cri-and-act3.mp4",
    "../../resources/video/액션·범죄/cri-and-act4.mp4",
    "../../resources/video/액션·범죄/cri-and-act5.mp4",
    "../../resources/video/액션·범죄/cri-and-act6.mp4",
    "../../resources/video/코미디/medy1.mp4",
    "../../resources/video/코미디/medy2.mp4",
    "../../resources/video/코미디/medy3.mp4",
    "../../resources/video/코미디/medy4.mp4",
    "../../resources/video/코미디/medy5.mp4",
    "../../resources/video/코미디/medy6.mp4",
    "../../resources/video/코미디/medy7.mp4",
    "../../resources/video/코미디/medy8.mp4",
    "../../resources/video/코미디/medy9.mp4",
    "../../resources/video/코미디/medy10.mp4",
  ];
  const htmlUrls1 = [
    "../../resources/html/공포/horror1.jpg",
    "../../resources/html/공포/horror2.jpg",
    "../../resources/html/공포/horror3.jpg",
    "../../resources/html/공포/horror4.jpg",
    "../../resources/html/공포/horror5.jpg",
    "../../resources/html/공포/horror6.jpg",
    "../../resources/html/공포/horror7.jpg",
    "../../resources/html/공포/horror8.jpg",
    "../../resources/html/공포/horror9.jpg",
    "../../resources/html/공포/horror10.jpg",
    "../../resources/html/스포츠/spo1.jpg",
    "../../resources/html/스포츠/spo2.jpg",
    "../../resources/html/스포츠/spo3.jpg",
    "../../resources/html/스포츠/spo4.jpg",
    "../../resources/html/스포츠/spo5.jpg",
    "../../resources/html/스포츠/spo6.jpg",
    "../../resources/html/스포츠/spo7.jpg",
    "../../resources/html/스포츠/spo8.jpg",
    "../../resources/html/스포츠/spo9.jpg",
    "../../resources/html/스포츠/spo10.jpg",
    "../../resources/html/액션·범죄/cri-and-act1.jpg",
    "../../resources/html/액션·범죄/cri-and-act2.jpg",
    "../../resources/html/액션·범죄/cri-and-act3.jpg",
    "../../resources/html/액션·범죄/cri-and-act4.jpg",
    "../../resources/html/액션·범죄/cri-and-act5.jpg",
    "../../resources/html/액션·범죄/cri-and-act6.jpg",
    "../../resources/html/코미디/medy1.jpg",
    "../../resources/html/코미디/medy2.jpg",
    "../../resources/html/코미디/medy3.jpg",
    "../../resources/html/코미디/medy4.jpg",
    "../../resources/html/코미디/medy5.jpg",
    "../../resources/html/코미디/medy6.jpg",
    "../../resources/html/코미디/medy7.jpg",
    "../../resources/html/코미디/medy8.jpg",
    "../../resources/html/코미디/medy9.jpg",
    "../../resources/html/코미디/medy10.jpg",
  ];
  
  function shuffleArrays(array1, array2, array3) {
    if (array1.length !== array2.length) {
      throw new Error('두 배열의 길이가 동일해야 합니다.');
    }
  
    // array1과 array2 모두 같은 방식으로 섞기
    for (let i = array1.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array1[i], array1[j]] = [array1[j], array1[i]];
      [array2[i], array2[j]] = [array2[j], array2[i]];
      [array3[i], array3[j]] = [array3[j], array3[i]];
    }
    return [array1, array2, array3];
  }
  
  const [shuffledMovieUrls1, shuffledVideoUrls1, shuffledhtmlUrls1] = shuffleArrays(movieUrls1, videoUrls1, htmlUrls1);
  const galleryImg = document.querySelectorAll(".gallery-img")

  // Append all shuffled images to .movie-container
  shuffledMovieUrls1.forEach((url) => {
      $(".gallery1").append(`<img src='${url}'class="gallery-img">`);
      // console.log(url)
      
    });


    // for(let i=0; i<$(".gallery-img").length;i++){
    //   $(".gallery-img")[i].append(`<video src='${shuffledVideoUrls1[i]}'></video>`)
    // }

    // $(".gallery-img").append(`<video src='${url}' controls></video>`);
  
  // shuffledhtmlUrls1.forEach((url) => {
  //   const img = document.createElement("img");
  //   img.src = url;
  //   img.classList.add("htmlImg"); // 이미지 클래스 추가
  //   $(".gallery1").append(img);
  // });
  

