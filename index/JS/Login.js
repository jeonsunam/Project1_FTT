// const pClick = document.querySelector("#click");
// const modalPage = document.querySelector(".modal-page");
// const modalClose = document.querySelector(".modal-close");
// const modalBack = document.querySelector(".modal-back");

// pClick.addEventListener("click", function () {
//   modalBack.style.display = "block";
// });

// modalClose.addEventListener("click", function () {
//   modalBack.style.display = "none";
// });

const genderBtn = document.querySelectorAll("input[name=gender]");
const languageBtn = document.querySelectorAll("input[name=language]");

// console.log(authNum);
// console.log(getTel);
// 텍스트를 누를때 쉐도우 효과
const TD = document.querySelectorAll("td");
TD.forEach((td) => {
  td.addEventListener("click", function () {
    if (!td.classList.contains("click")) {
      TD.forEach((button) => {
        button.classList.remove("click");
      });
      td.classList.add("click");
    }
  });
});
