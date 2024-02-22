const find = document.querySelector("#findMovie");
const modalClose = document.querySelector(".modal-close");
const modalBack = document.querySelector(".modal-back");
const login = document.querySelectorAll(".login");
const msCard = document.querySelectorAll(".ms-card-ac");

msCard.forEach((el) => {
  el.addEventListener("click", () => {
    alert("로그인 해주세요");
    modalBack.style.display = "block";
  });
});

login.forEach((el) => {
  el.addEventListener("click", () => {
    modalBack.style.display = "block";
  });
});

find.addEventListener("click", () => {
  alert("로그인 해주세요.");
  modalBack.style.display = "block";
});
