const btn = document.querySelector(".agree-next-btn");
const checkAll = document.querySelector("input[name=check-all]");
const check = document.querySelectorAll("input[name=check]");

checkAll.addEventListener("change", (e) => {
  for (let i = 0; i < check.length; i++) {
    check[i].checked = e.target.checked;
  }
});

for (let i = 0; i < check.length; i++) {
  check[i].addEventListener("change", () => {
    checkAll.checked = true;

    for (let j = 0; j < check.length; j++) {
      if (!check[j].checked) {
        checkAll.checked = false;
        break;
      }
    }
  });
}

btn.addEventListener("click", () => {
  if (checkAll.checked) {
    window.location.href = "http://127.0.0.1:5501/index/HTML/signUp.html";
  } else {
    alert("필수 항목을 체크해주세요");
  }
});
