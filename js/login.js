import {ERROR_MESSAGE } from "../constant.js";

const emailDiv = document.querySelector('#email');
const pwdDiv = document.querySelector('#password');
const emailInput = document.querySelector('.email-input');
const pwdInput = document.querySelector('.password-input');
const signinBtn = document.querySelector('#signinBtn');
const pwdEyeIcon = document.querySelector('.PwdEyeIcon');

let [emailVal, pwdVal] = ["", ""];

// 에러 메세지 출력 함수
function errorMsg(errorCase) {
  let newNode = document.createElement('div');

  switch(errorCase) {
    case "NoEmail":
      newNode.innerHTML = `<p>${ERROR_MESSAGE.email.empty}</p>`
      newNode.classList.add(errorCase,'errorMsg');
      newNode.setAttribute('sort', 'email');
      break;
    case "wrongEmail":
      newNode.innerHTML = `<p>${ERROR_MESSAGE.email.invalid}</p>`
      newNode.classList.add(errorCase,'errorMsg');
      newNode.setAttribute('sort', 'email');
      break;
    case "NoPwd" :
      newNode.innerHTML = `<p>${ERROR_MESSAGE.password.empty}</p>`
      newNode.classList.add(errorCase,'errorMsg');
      newNode.setAttribute('sort', 'password');
      break;
    case "Other": 
      newNode.innerHTML = `<p>${ERROR_MESSAGE.email.check}</p>`
      newNode.classList.add(errorCase,'errorMsg');
      newNode.setAttribute('sort', 'email');

      let newNodePwd = document.createElement('div');
      pwdInput.setAttribute('status','error');
      newNodePwd.innerHTML = `<p>${ERROR_MESSAGE.password.check}</p>`
      newNodePwd.classList.add(errorCase,'errorMsg');
      pwdDiv.children[2] ? pwdDiv.children[2].remove() : null;
      pwdDiv.append(newNodePwd);

      break;
  }
  
  if(newNode.getAttribute('sort') === "email") {
    emailInput.setAttribute('status','error');
    emailDiv.children[2] ? emailDiv.children[2].remove() : null;
    emailDiv.append(newNode);
  } else if (newNode.getAttribute('sort') === "password") {
    pwdInput.setAttribute('status','error');
    pwdDiv.children[2] ? pwdDiv.children[2].remove() : null;
    pwdDiv.append(newNode);
  }
 }

 // 에러 메세지 제거와, input 상태 정상으로
 function delError(type) {
  switch(type) {
    case "email" : 
      emailDiv.children[2] ? emailDiv.children[2].remove() : null
      emailInput.setAttribute('status', 'steady');
    case "password" :
      pwdDiv.children[2] ? pwdDiv.children[2].remove() : null
      pwdInput.setAttribute('status', 'steady');
  }
 }

 // 이메일 유효성 체크 함수
 function emailCheck(email_address){     
    let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    let checkElement = emailDiv.lastElementChild.classList;
    if(!email_regex.test(email_address)){ 
        errorMsg("wrongEmail");
        return false;
    } else{
        delError('email');
        return true;
	}
}

// 이메일 input 핸들러
function emailHandlerFunc(email) {
  email ? emailCheck(email) : errorMsg("NoEmail")
  emailVal = email; 
}

// 비밀번호 input 핸들러 함수
function passwordHandlerFuc(password) {
  password ? delError('password') : errorMsg("NoPwd")
  pwdVal = password;
}

// 로그인 시도 함수
function trySignin(email,password) {
  if(email === "test@codeit.com" && password === "codeit101") {
    signinBtn.parentElement.setAttribute('href',"/folder.html");
  } else {
    errorMsg("Other"); 
  }
}

// enter키 입력으로 로그인 실행 
function EnterLogin(key) {
  if(key === 'Enter') {
    trySignin();
  }
}

// password input 눈모양 클릭 실행 함수
function EyePwd(EyeStatus) {
  if(EyeStatus.classList.contains('off')) {
    pwdEyeIcon.setAttribute('src',"assets/icons/eye-off.png");
    pwdInput.setAttribute('type', 'password');

  } else {
    pwdEyeIcon.setAttribute('src',"assets/icons/eye-on.png");
    pwdInput.setAttribute('type', 'text');
  }
}

// email input 이벤트 함수 등록
emailInput.addEventListener('focusout', function(e) {
  emailHandlerFunc(e.target.value);
});
emailInput.addEventListener('keypress', function(e) {
  EnterLogin(e.key);
});

// password input 이벤트 함수 등록
pwdInput.addEventListener('focusout', function(e) {
  passwordHandlerFuc(e.target.value);
});
pwdInput.addEventListener('keypress', function(e) {
  EnterLogin(e.key);
});

// 로그인 버튼 이벤트 함수 등록
 signinBtn.addEventListener('click', function(e) {
  trySignin(emailVal, pwdVal);
 });

 // 눈모양 아이콘 이벤트 함수 등록
 pwdEyeIcon.addEventListener('click', function(e) {
  e.target.classList.toggle('off');
  EyePwd(e.target);
 })
