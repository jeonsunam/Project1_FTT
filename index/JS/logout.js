const logout = document.querySelector(".g-main .logOut");

logout.addEventListener("click", function () {
  const out = confirm("로그아웃 하시겠습니까?");
  if (out == true) {
    location.href = "http://127.0.0.1:5501/index/HTML/page.html";
  } else {
    alert("감사합니다.");
  }
});
