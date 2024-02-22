function buyPopup() {
  window.open("buy1.html", "popup", "width=750,height=700");
}
function buyPopup2() {
  window.open("buy2.html", "popup", "width=750,height=700");
}
function buyPopup3() {
  window.open("buy3.html", "popup", "width=750,height=700");
}
function buyPopup4() {
  window.open("buy4.html", "popup", "width=750,height=700");
}
function buyPopup5() {
  window.open("buy5.html", "popup", "width=750,height=700");
}
function buyPopup6() {
  window.open("buy6.html", "popup", "width=750,height=700");
}

const price = document.querySelector(".price");
const card = document.querySelectorAll(".card.general");

// Agree에서 가지고 옴
const btn = document.querySelector(".payBtn");
const checkAll = document.querySelector("input[name=check-all]");
const check = document.querySelectorAll("input[name=check]");

const content = document.querySelector(".buyPopup-content");
const table = document.querySelector(".two-table");

// card.forEach((el) => {
//   el.addEventListener("click", () => {
//     if (document.querySelector(".card.selected")) {
//       btn.removeAttribute("disabled");
//       btn.style.backgroundColor = "red";
//     }

//     if (!el.classList.contains("selected")) {
//       card.forEach((cd) => {
//         cd.classList.remove("selected");
//       });
//       el.classList.add("selected");
//     } else {
//       el.classList.remove("selected");
//       alert("결제 수단을 선택하세요");
//       btn.style.backgroundColor = "";
//     }
//   });
// });
card.forEach((el) => {
  el.addEventListener("click", () => {
    if (!el.classList.contains("selected")) {
      card.forEach((cd) => {
        cd.classList.remove("selected");
      });
      el.classList.add("selected");

      // 선택된 카드가 있으면 버튼 활성화 및 스타일 변경
      if (document.querySelector(".card.selected")) {
        btn.style.cursor = "pointer";
        btn.removeAttribute("disabled");
        btn.style.backgroundColor = "red";
      }
    } else {
      el.classList.remove("selected");
      // 선택이 해제되면 버튼 비활성화 및 스타일 초기화
      // btn.setAttribute("disabled", true);
      btn.style.cursor = "auto";
      btn.style.backgroundColor = "";
      alert("결제 수단을 선택하세요");
    }
  });
});

window.onload = function () {
  var currentDate = new Date();
  var year = currentDate.getFullYear().toString().slice(-2); // 연도의 끝 두 자리
  var month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // 월을 두 자리로 만들기
  var day = ("0" + currentDate.getDate()).slice(-2); // 일을 두 자리로 만들기

  var formattedDate = year + "." + month + "." + day;

  document.getElementById("date").innerHTML = formattedDate;

  var futureDateAdd = new Date(
    currentDate.getTime() + 30 * 24 * 60 * 60 * 1000
  ); // 현재 날짜에 30일을 더함

  var yearAdd = futureDateAdd.getFullYear();
  var monthAdd = ("0" + (futureDateAdd.getMonth() + 1)).slice(-2);
  var dayAdd = ("0" + futureDateAdd.getDate()).slice(-2);

  var formattedDateAdd = yearAdd + "." + monthAdd + "." + dayAdd;

  document.getElementById("dateAdd").innerHTML = formattedDateAdd;
};
var pastRadio = document.getElementById("past");
var notPastRadio = document.getElementById("notPast");

pastRadio.addEventListener("change", function () {
  document.querySelector(".show1").style.display = "block";
  document.querySelector(".show2").style.display = "none";
});

notPastRadio.addEventListener("change", function () {
  document.querySelector(".show1").style.display = "none";
  document.querySelector(".show2").style.display = "block";
});

// buyAgree 있었던 부분

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

// btn.addEventListener("click", () => {
//   if (checkAll.checked) {
//     alert("감사합니다.");
//     window.opener.location.href = "http://127.0.0.1:5501/index/HTML/main.html";
//     window.close();
//   } else {
//     alert("필수 항목을 체크해주세요");
//   }
// });
