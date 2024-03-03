const logout = document.querySelector(".g-main .logOut");

logout.addEventListener("click", function () {
  const out = confirm("로그아웃 하시겠습니까?");
  if (out == true) {
    location.href = "../../index.html";
  } else {
    alert("감사합니다.");
  }
});
