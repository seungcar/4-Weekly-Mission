import { ERROR_MESSAGES } from "./constants/VALIDATION.js";
import {
  emailError,
  emailInput,
  pwError,
  pwInput,
  form,
  pwToggle,
  validateEmail,
  validatePw,
  eyeToggle,
  showError,
  checkLoginStatus,
} from "./utils/auth.js";
import { loginInquire } from "./services/authAPI.js";

checkLoginStatus();

const handleFail = () => {
  showError(emailError, emailInput, ERROR_MESSAGES.email_check);
  showError(pwError, pwInput, ERROR_MESSAGES.password_check);
};

const handleSignIn = async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = pwInput.value.trim();
  const userData = {
    email,
    password,
  };
  try {
    const result = await loginInquire(userData);
    if (result.ok) {
      alert("로그인 성공!");
      window.location.href = "folder.html";
    }
  } catch (e) {
    alert("이메일 혹은 비밀번호를 확인해주세요!");
    handleFail();
  }
};

emailInput.addEventListener("focusout", validateEmail);
pwInput.addEventListener("focusout", validatePw);
form.addEventListener("submit", handleSignIn);
pwToggle.addEventListener("click", () => eyeToggle(pwInput, pwToggle));
