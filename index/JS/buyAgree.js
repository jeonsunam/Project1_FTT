// const btn = document.querySelector(".payBtn");
// const checkAll = document.querySelector("input[name=check-all]");
// const check = document.querySelectorAll("input[name=check]");
// const cards = document.querySelectorAll(".card.general");
// cards.forEach((el) => {
//   console.log(el);
// });
// checkAll.addEventListener("change", (e) => {
//   for (let i = 0; i < check.length; i++) {
//     check[i].checked = e.target.checked;
//   }
// });

// for (let i = 0; i < check.length; i++) {
//   check[i].addEventListener("change", () => {
//     checkAll.checked = true;

//     for (let j = 0; j < check.length; j++) {
//       if (!check[j].checked) {
//         checkAll.checked = false;
//         break;
//       }
//     }
//   });
// }

// btn.addEventListener("click", () => {
//   if (checkAll.checked) {
//     alert("감사합니다.");
//     window.opener.location.href = "http://127.0.0.1:5501/index/HTML/main.html";
//     window.close();

//     // window.close();
//   } else {
//     alert("필수 항목을 체크해주세요");
//   }
// });
