// sign 공통변수
const signForm = document.querySelector('#signForm');
const errorMessageEmail = document.querySelector('#error-message-email');
const errorMessagePassword = document.querySelector('#error-message-password');
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const submitBtn = document.querySelector('#submitBtn');
const passwordEyeBtn = document.querySelector('#passwordEyeBtn');
const passwordEyeOff = document.querySelector('#passwordEyeOff');
const passwordEyeOn = document.querySelector('#passwordEyeOn');

function checkValidationEmail(email_address){     
	let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	if(!email_regex.test(email_address)){ 
		return false; 
	} else {
		return true;
	};
}; // 이메일이 정규식인지 확인해서 불린값 리턴함

function errorMsgAdd(input, msgType, errText){
  input.classList.add('sign-input-error');
  msgType.innerHTML = errText;
  msgType.classList.remove('display-none');
}; // 에러 메세지 출력

function errorMsgRemove(input, msgType){
  input.classList.remove('sign-input-error');
  msgType.classList.add('display-none');
}; // 에러 메세지 지우기

function togglePasswordEyeBtn(){
  if(passwordInput.getAttribute('type') === 'password'){
    passwordInput.setAttribute('type', 'text'); // 비밀번호 보이기
    passwordEyeOff.classList.add('display-none'); // 눈 아이콘 변경
    passwordEyeOn.classList.remove('display-none');
  } else {
    passwordInput.setAttribute('type', 'password'); // 비밀번호 가리기
    passwordEyeOn.classList.add('display-none'); // 눈 아이콘 변경
    passwordEyeOff.classList.remove('display-none');
  }
}; // 비밀번호 보이기/가리기

export { signForm, errorMessageEmail, errorMessagePassword, emailInput, passwordInput, submitBtn, passwordEyeBtn, passwordEyeOff, passwordEyeOn, checkValidationEmail, errorMsgAdd, errorMsgRemove, togglePasswordEyeBtn };