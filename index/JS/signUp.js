const genderBtn = document.querySelectorAll("input[name=gender]");
const languageBtn = document.querySelectorAll("input[name=language]");
const getValue1 = document.querySelectorAll(".getVal1");
const getValue2 = document.querySelectorAll(".getVal2");
const check = document.querySelector("#newCheck");
const getNumber = document.querySelector(".auth-num");
const getTel = document.querySelector(".get-tel");
const inputNumber = document.querySelector("#getNumber");

const idRegex = /^[a-zA-Z0-9]{4,12}$/;

const pwRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

const nameRegex = /[가-힣a-zA-Z\s]{2,5}/;

const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;

const birthRegex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

const getNumberRegex = /\d{4}/;

var clickGender = ""; // 초기값 설정
var clickLanguage = ""; // 초기값 설정

// 인증번호 받기를 누르면 인증번호를 입력하는 칸
getNumber.addEventListener("click", function () {
  if (phoneRegex.test(document.querySelector("input[name = phone]").value)) {
    let randBox = [];
    for (let i = 0; i < 4; i++) {
      const rand = Math.floor(Math.random() * 10);
      randBox.push(rand);
    }
    alert("인증번호를 전송했습니다.");
    getTel.style.display = "block";
    setTimeout(() => {
      inputNumber.value = randBox.join("");
      // document.querySelector("#getNumber").value = randBox.join("");
    }, 1000);
  } else {
    alert("알맞은 전화번호를 입력해주세요.");
  }
});

// 비밀번호 일치 여부 확인 부분 수정
setInterval(() => {
  const signPw = document.querySelector("#signPassword").value;
  const signPwCheck = document.querySelector("#signPwCheck").value;
  if (signPwCheck.length > 0) {
    if (signPw === signPwCheck) {
      check.innerText = "비밀번호 일치";
      check.style.color = "green";
      check.style.fontWeight = "bold";
    } else {
      check.innerText = "비밀번호 불일치";
      check.style.color = "red";
      check.style.fontWeight = "bold";
    }
  } else {
    check.innerText = ""; // 입력이 없을 때 메시지를 초기화
  }
}, 100);

getValue1.forEach((el) => {
  el.addEventListener("click", () => {
    clickGender = el.value;
    console.log(clickGender);
  });
});

getValue2.forEach((el) => {
  el.addEventListener("click", () => {
    clickLanguage = el.value;
    console.log(clickLanguage);
  });
});

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

genderBtn.forEach((el) => {
  el.addEventListener("click", function () {
    if (!el.classList.contains("selected")) {
      genderBtn.forEach((button) => {
        button.classList.remove("selected");
      });
      el.classList.add("selected");
    }
  });
});

languageBtn.forEach((el) => {
  el.addEventListener("click", function () {
    if (!el.classList.contains("selected")) {
      languageBtn.forEach((button) => {
        button.classList.remove("selected");
      });
      el.classList.add("selected");
    }
  });
});
