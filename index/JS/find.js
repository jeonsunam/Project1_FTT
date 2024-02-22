// function filter() {
//   const iconInput = $("#search").val();
//   const Imgcontent = $(".img-content");

//   const img = $(".img");
//   const name1 = $(".name");

//   if (
//     img[0].html().indexof(iconInput) != -1 ||
//     name1[0].html().indexof(iconInput) != -1
//   ) {
//     Imgcontent.css("display", "flex");
//   } else {
//     Imgcontent.css("display", "none");
//   }
// }
// const htmlUrls = [
//   "../../resources/image/공포/horror1.jpg",
//   "../../resources/html/공포/horror2.jpg",
//   "../../resources/html/공포/horror3.jpg",
//   "../../resources/html/공포/horror4.jpg",
//   "../../resources/html/공포/horror5.jpg",
//   "../../resources/html/공포/horror6.jpg",
//   "../../resources/html/공포/horror7.jpg",
//   "../../resources/html/공포/horror8.jpg",
//   "../../resources/html/공포/horror9.jpg",
//   "../../resources/html/공포/horror10.jpg",
//   "../../resources/html/스포츠/spo1.jpg",
//   "../../resources/html/스포츠/spo2.jpg",
//   "../../resources/html/스포츠/spo3.jpg",
//   "../../resources/html/스포츠/spo4.jpg",
//   "../../resources/html/스포츠/spo5.jpg",
//   "../../resources/html/스포츠/spo6.jpg",
//   "../../resources/html/스포츠/spo7.jpg",
//   "../../resources/html/스포츠/spo8.jpg",
//   "../../resources/html/스포츠/spo9.jpg",
//   "../../resources/html/스포츠/spo10.jpg",
//   "../../resources/html/액션·범죄/cri-and-act1.jpg",
//   "../../resources/html/액션·범죄/cri-and-act2.jpg",
//   "../../resources/image/액션·범죄/cri-and-act3.jpg",
//   "../../resources/html/액션·범죄/cri-and-act4.jpg",
//   "../../resources/html/액션·범죄/cri-and-act5.jpg",
//   "../../resources/html/액션·범죄/cri-and-act6.jpg",
//   "../../resources/image/코미디/medy1.jpg",
//   "../../resources/image/코미디/medy2.jpg",
//   "../../resources/image/코미디/medy3.jpg",
//   "../../resources/image/코미디/medy4.jpg",
//   "../../resources/image/코미디/medy5.jpg",
//   "../../resources/image/코미디/medy6.jpg",
//   "../../resources/image/코미디/medy7.jpg",
//   "../../resources/image/코미디/medy8.jpg",
//   "../../resources/image/코미디/medy9.jpg",
//   "../../resources/image/코미디/medy10.jpg",
// ];

// const mvName = [
//   "잠",
//   "곤지암",
//   "옥수역 귀신",
//   "인시디어스",
//   "주온",
//   "변신",
//   "컨저링",
//   "애나벨",
//   "속닥속닥",
//   "소녀괴담",
//   "국가대표",
//   "코리아",
//   "파울볼",
//   "말아톤",
//   "퍼펙트게임",
//   "스퀴즈",
//   "코치카터",
//   "파울볼",
//   "투혼",
//   "글러브",
//   "암수살인",
//   "부당거래",
//   "범죄도시2",
//   "타겟",
//   "범죄도시3",
//   "범죄도시",
//   "가문의 영광",
//   "부라더",
//   "수상한 그녀",
//   "압꾸정",
//   "오케이 마담",
//   "웅남이",
//   "육사오",
//   "정직한 후보",
//   "극한직업",
//   "헬머니",
// ];

const movieData = [
  { url: "../../resources/html/공포/horror1.jpg", name: "잠" },
  { url: "../../resources/html/공포/horror2.jpg", name: "곤지암" },
  { url: "../../resources/html/공포/horror3.jpg", name: "옥수역 귀신" },
  { url: "../../resources/html/공포/horror4.jpg", name: "인시디어스" },
  { url: "../../resources/html/공포/horror5.jpg", name: "주온" },
  { url: "../../resources/html/공포/horror6.jpg", name: "변신" },
  { url: "../../resources/html/공포/horror7.jpg", name: "컨저링" },
  { url: "../../resources/html/공포/horror8.jpg", name: "애나벨" },
  { url: "../../resources/html/공포/horror9.jpg", name: "속닥속닥" },
  { url: "../../resources/html/공포/horror10.jpg", name: "소녀괴담" },
  { url: "../../resources/html/스포츠/spo1.jpg", name: "국가대표" },
  { url: "../../resources/html/스포츠/spo2.jpg", name: "코리아" },
  { url: "../../resources/html/스포츠/spo3.jpg", name: "파울볼" },
  { url: "../../resources/html/스포츠/spo4.jpg", name: "말아톤" },
  { url: "../../resources/html/스포츠/spo5.jpg", name: "퍼펙트 게임" },
  { url: "../../resources/html/스포츠/spo6.jpg", name: "스퀴즈" },
  { url: "../../resources/html/스포츠/spo7.jpg", name: "코치카터" },
  { url: "../../resources/html/스포츠/spo8.jpg", name: "파울볼" },
  { url: "../../resources/html/스포츠/spo9.jpg", name: "투혼" },
  { url: "../../resources/html/스포츠/spo10.jpg", name: "글러브" },
  { url: "../../resources/html/액션·범죄/cri-and-act1.jpg", name: "암수살인" },
  { url: "../../resources/html/액션·범죄/cri-and-act2.jpg", name: "부당거래" },
  {
    url: "../../resources/image/액션·범죄/cri-and-act3.jpg",
    name: "범죄도시2",
  },
  { url: "../../resources/html/액션·범죄/cri-and-act4.jpg", name: "타겟" },
  { url: "../../resources/html/액션·범죄/cri-and-act5.jpg", name: "범죄도시3" },
  { url: "../../resources/html/액션·범죄/cri-and-act6.jpg", name: "범죄도시" },
  { url: "../../resources/image/코미디/medy1.jpg", name: "가문의 영광" },
  { url: "../../resources/image/코미디/medy2.jpg", name: "부라더" },
  { url: "../../resources/image/코미디/medy3.jpg", name: "수상한 그녀" },
  { url: "../../resources/image/코미디/medy4.jpg", name: "압꾸정" },
  { url: "../../resources/image/코미디/medy5.jpg", name: "오케이 마담" },
  { url: "../../resources/image/코미디/medy6.jpg", name: "웅남이" },
  { url: "../../resources/image/코미디/medy7.jpg", name: "육사오" },
  { url: "../../resources/image/코미디/medy8.jpg", name: "정직한 후보" },
  { url: "../../resources/image/코미디/medy9.jpg", name: "극한직업" },
  { url: "../../resources/image/코미디/medy10.jpg", name: "헬머니" },
];
const videoData = [
 "../../resources/video/공포/horror1.mp4" ,
 "../../resources/video/공포/horror2.mp4",
 "../../resources/video/공포/horror3.mp4",
 "../../resources/video/공포/horror4.mp4",
 "../../resources/video/공포/horror5.mp4",
 "../../resources/video/공포/horror6.mp4",
 "../../resources/video/공포/horror7.mp4" ,
 "../../resources/video/공포/horror8.mp4" ,
 "../../resources/video/공포/horror9.mp4",
 "../../resources/video/공포/horror10.mp4",
 "../../resources/video/스포츠/spo1.mp4" ,
 "../../resources/video/스포츠/spo2.mp4",
 "../../resources/video/스포츠/spo3.mp4",
 "../../resources/video/스포츠/spo4.mp4",
 "../../resources/video/스포츠/spo5.mp4" ,
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
 "../../resources/video/코미디/medy2.mp4" ,
 "../../resources/video/코미디/medy3.mp4",
 "../../resources/video/코미디/medy4.mp4" ,
 "../../resources/video/코미디/medy5.mp4" ,
 "../../resources/video/코미디/medy6.mp4",
 "../../resources/video/코미디/medy7.mp4",
 "../../resources/video/코미디/medy8.mp4" ,
 "../../resources/video/코미디/medy9.mp4" ,
 "../../resources/video/코미디/medy10.mp4" ,
];


function shuffleArrays(array1, array2) {
  if (array1.length !== array2.length) {
    throw new Error('두 배열의 길이가 동일해야 합니다.');
  }

  // array1과 array2 모두 같은 방식으로 섞기
  for (let i = array1.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array1[i], array1[j]] = [array1[j], array1[i]];
    [array2[i], array2[j]] = [array2[j], array2[i]];
  }
  return [array1, array2];
}

const [shuffledMovieUrls1, shuffledVideoUrls1] = shuffleArrays(movieData, videoData);

console.log(videoData)

// function shuffleArray(array, array2) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// shuffleArray(movieData);

// $(document).ready(function () {
const imageContainer = $("#imageContainer");

for (let i = 0; i < movieData.length; i++) {
  const imgContent = $("<div>").addClass("img-content");
  const img = $("<img>")
    .addClass("img")
    .attr("src", movieData[i].url)
    .attr("alt", "");
  const h2 = $("<h2>").addClass("name").text(movieData[i].name);

  imgContent.append(img, h2);
  imageContainer.append(imgContent);
}
// console.log(videoData)

for (let i = 0; i < videoData.length; i++){
  const videoDT = $("<video>").attr("src", videoData[i]).attr("alt", "");
    imageContainer.append(videoDT)
}


function filter() {
  const iconInput = $("#search").val();
  const Imgcontent = $(".img-content");

  Imgcontent.each(function () {
    const name = $(this).find("h2");

    if (name.text().indexOf(iconInput) !== -1) {
      $(this).css("display", "block");
    } else {
      $(this).css("display", "none");
    }
  });
}

$("#search").on("input", filter);
// });
// --------------------------------------------------------------
// $(document).ready(function () {
//   const imageContainer = $("#imageContainer");

//   for (let i = 0; i < htmlUrls.length; i++) {
//     const imgContent = $("<div>").addClass("img-content");
//     const img = $("<img>")
//       .addClass("img")
//       .attr("src", htmlUrls[i])
//       .attr("alt", "");
//     const h2 = $("<h2>").addClass("name").text(mvName[i]);

//     imgContent.append(img, h2);
//     imageContainer.append(imgContent);
//   }

//   function filter() {
//     const iconInput = $("#search").val();
//     const Imgcontent = $(".img-content");

//     Imgcontent.each(function () {
//       const name = $(this).find("h2");

//       if (name.text().indexOf(iconInput) !== -1) {
//         $(this).css("display", "block");
//       } else {
//         $(this).css("display", "none");
//       }
//     });
//   }

//   $("#search").on("input", filter);
// });

// ------------------------------------------------------

// function filter() {
//   const iconInput = $("#search").val();
//   const Imgcontent = $(".img-content");

//   Imgcontent.each(function () {
//     const img = $(this).find("img");
//     const name = $(this).find("h2");

//     if (
//       //   img.attr("src").indexOf(iconInput) !== -1 ||
//       name.text().indexOf(iconInput) !== -1
//     ) {
//       $(this).css("display", "block");
//     } else {
//       $(this).css("display", "none");
//     }
//   });
// }

// $(document).ready(function () {
//   $("#search").on("input", filter);
// });
