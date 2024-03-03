const alarm = document.querySelector(".alarm");
const alarmId = document.querySelector("#alarmId");
const modalMask = document.querySelector(".modal-mask");
const popupCloseIr = document.querySelector(".popup-close");
const setting = document.querySelectorAll(".set");
const option = document.querySelector(".setting");
const updateBtn = document.querySelector(".setting-info");

const allWin = document.querySelector("body");
console.log(option);
// console.log("hello");
// console.log(alarmId);

alarm.addEventListener("click", () => {
  // alert("click");
  modalMask.style.display = "block";
});

popupCloseIr.addEventListener("click", () => {
  modalMask.style.display = "none";
});

option.addEventListener("click", () => {
  setting[0].style.display = "block";
  setting[1].style.display = "block";
});

updateBtn.addEventListener("click", () => {
  location.href = "./changeInfo.html";
});
