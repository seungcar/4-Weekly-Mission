//@ts-check
import { DOMHandler, InputHandler } from './element.js';
import {
  EMAIL_REGEX,
  EMAIL_MESSAGE,
  SHOW_PASSWORD_ICON,
  PASSWORD_MESSAGE,
  PASSWORD_REGEX,
  USERS
} from '../constant/signConfig.js';

/**
 * inputElement: ErrorColor, textElement: showErrorMessage
 * @param inputElement {HTMLInputElement | null} inputElement - inputElement
 * @param textElement {HTMLElement | null} textElement - textElement
 * @param text {string} text - textElement text
 */
export const showErrorMessage = (inputElement, textElement, text) => {
  inputElement?.classList.add('red-box');
  textElement?.classList.remove('hidden');
  DOMHandler.changeValue(textElement, text);
};

export const deleteRedBox = element => {
  element?.classList.remove('red-box');
};

export const checkEmail = (emailElement, emailErrorElement) => {
  if (InputHandler.isMatchRegEx(emailElement, EMAIL_REGEX)) {
    emailErrorElement?.classList.add('hidden');
    return;
  }
  if (InputHandler.isEmptyValue(emailElement)) {
    showErrorMessage(emailElement, emailErrorElement, EMAIL_MESSAGE.empty);
    return;
  }
  showErrorMessage(emailElement, emailErrorElement, EMAIL_MESSAGE.invalid);
};

export const checkExistEmail = (emailElement, emailErrorElement) => {
  if (isExistEmail(USERS, emailElement)) {
    showErrorMessage(emailElement, emailErrorElement, EMAIL_MESSAGE.exist);
    return;
  }
};

export const checkValidPassword = (passwordElement, passwordErrorElement) => {
  if (InputHandler.isMatchRegEx(passwordElement, PASSWORD_REGEX)) {
    passwordErrorElement?.classList.add('hidden');
    return;
  }
  showErrorMessage(passwordElement, passwordErrorElement, PASSWORD_MESSAGE.invalid);
};

export const checkEmptyPassword = (passwordElement, passwordErrorElement) => {
  if (InputHandler.isEmptyValue(passwordElement)) {
    showErrorMessage(passwordElement, passwordErrorElement, PASSWORD_MESSAGE.empty);
    return;
  }
  passwordErrorElement?.classList.add('hidden');
};

export const toggleImage = (passwordElement, eyeImage) => {
  if (!passwordElement || !eyeImage) return;
  if (passwordElement.type === 'password') {
    passwordElement.type = 'text';
    eyeImage.src = SHOW_PASSWORD_ICON.visible.src;
    eyeImage.alt = SHOW_PASSWORD_ICON.visible.alt;
  } else {
    passwordElement.type = 'password';
    eyeImage.src = SHOW_PASSWORD_ICON.invisible.src;
    eyeImage.alt = SHOW_PASSWORD_ICON.invisible.alt;
  }
};

export const isValidUser = (USERS, emailElement, passwordElement) => {
  return USERS.some(
    user =>
      InputHandler.isMatchValue(emailElement, user.id) && InputHandler.isMatchValue(passwordElement, user.password)
  );
};

export const isExistEmail = (USERS, emailElement) => {
  return USERS.some(user => InputHandler.isMatchValue(emailElement, user.id));
};
