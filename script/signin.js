/* 이메일 input에서 focus out 할 때
값이 없을 경우 아래에 "이메일을 입력해 주세요." 에러 메시지를 보입니다 */

const emailInput = document.getElementById('email');
const emailErrorMessage = document.createElement('div');
emailErrorMessage.className = 'error-message'; //에러 메시지를 표현하는 폼은 모두 같다.
emailErrorMessage.classList.add('text-medium');
emailErrorMessage.innerText = '이메일을 입력해 주세요'

emailInput.addEventListener('focusout', function(){
  if(!emailInput.value.trim()) { //trim의 값이 거짓일 때는 (빈 문자열 또는 공백만 포함일떄!) 즉, 지금 상태는 빈문자열일때!
    emailErrorMessage.style.display = 'block'; // 화면에 보여줌
    emailInput.classList.add('error-box');
    emailInput.parentElement.lastElementChild.after(emailErrorMessage);
  } else {
    emailErrorMessage.style.display = 'none'; // 화면에 안보여줌
    emailInput.classList.remove('error-box');
  }
});

/*이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 
"올바른 이메일 주소가 아닙니다" 라고 에러 메세지를 보냅니다. */

const emailFormatErrorMessage = document.createElement('div');
emailFormatErrorMessage.className = 'error-message';
emailFormatErrorMessage.classList.add('text-medium');
emailFormatErrorMessage.innerText = '올바른 이메일 주소가 아닙니다.';

emailInput.addEventListener('focusout', function () {
    const emailValue = emailInput.value.trim(); 
    if (emailValue && !isValidEmail(emailValue)) { //빈문자열이 아니면서 이메일 형식과 맞지 않을 때 
        emailFormatErrorMessage.style.display = 'block'; //화면에 보여줌
        emailInput.parentElement.lastElementChild.after(emailFormatErrorMessage);
    } else {
        emailFormatErrorMessage.style.display = 'none';
    }
});

function isValidEmail(email) { //isValidEmail function을 제작하면됨. 음 .com. .kr등의 pop했을 때 양식을 만들어준다? 정도로 가자 질문!!!
    let spotcount = atsigncount = 0;

    for(let word of email) {
        if(word === '.') spotcount++;
        else if (word ==='@') atsigncount++;
    }
    
    return spotcount === 1 && atsigncount ===1;
}

/*이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, 
“/folder” 페이지로 이동합니다.*/

/*이외의 로그인 시도의 경우, 이메일 input 아래에 “이메일을 확인해 주세요.”,
비밀번호 input 아래에 “비밀번호를 확인해 주세요.” 에러 메세지를 보입니다.*/ 

// 2가지 모두 같은 동작으로 진행되어서 묶어서 처리합니다..
// 만약 해당 출력이 맞지 않는다면 이를 분해해서 if-else문 2개로 처리하면 됩니다.

const signInButton = document.querySelector('.cta');
const passwordInput = document.getElementById('password'); // emailValue는 위에서 가져왔기 때문에 PWValue만 참조

const emailCheckErrorMessage = document.createElement('div');
emailCheckErrorMessage.className = 'error-message';
emailCheckErrorMessage.classList.add('text-medium');
emailCheckErrorMessage.innerText = '이메일을 확인해 주세요.';

const passwordCheckMessage = document.createElement('div');
passwordCheckMessage.className = 'error-message';
passwordCheckMessage.classList.add('text-medium')
passwordCheckMessage.innerText = '비밀번호를 확인해 주세요.';

signInButton.addEventListener('click', function (event) {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === 'test@codeit.com' && passwordValue === 'codeit101') {
        window.location.href = '../folder.html'; // 데이터베이스 접근이 예상되지만, 정상적 실행 확인을 위해 html 사이트로 연결
    } else {
        emailInput.parentElement.lastElementChild.after(emailCheckErrorMessage);
        passwordInput.parentElement.lastElementChild.after(passwordCheckMessage);
    }
});

/*비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.” 
에러 메세지를 보입니다.*/

const passwordErrorMessage = document.createElement('div');
passwordErrorMessage.className = 'error-message';
passwordErrorMessage.classList.add('text-medium')
passwordErrorMessage.innerText = '비밀번호를 입력해 주세요.';

passwordInput.addEventListener('focusout', function () {
    if (!passwordInput.value.trim()) {
        passwordErrorMessage.style.display = 'block';
        passwordInput.classList.add('error-box')
        passwordInput.parentElement.lastElementChild.after(passwordErrorMessage);
    } else {
        passwordErrorMessage.style.display = 'none';
        passwordInput.classList.remove('error-box');
    }
});

/*눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 
비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이도록 합니다.*/ 

const watchPassword = document.querySelector('.eye-button');
const targetSrc = "./assets/logo/eye-on.svg"; //비교 대조군 생성
let imgSrc = watchPassword.firstElementChild.src;

watchPassword.addEventListener('click', function () {

    if(imgSrc === targetSrc) {
        imgSrc = "./assets/logo/eye-off.svg";
        watchPassword.firstElementChild.src = imgSrc;
        watchPassword.previousElementSibling.type = "password";
    } else {
        imgSrc = targetSrc;
        watchPassword.firstElementChild.src = imgSrc;
        watchPassword.previousElementSibling.type = "text";
    }
});
