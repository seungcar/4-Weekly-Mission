import { useEffect, useRef, useState } from "react";
import styles from "./SignForm.module.scss";

interface SignFormProps {
  buttontext: string;
}

export const SignForm: React.FC<SignFormProps> = ({ buttontext }) => {
  const PLACEHOLDER: { [key: string]: string } = {
    email: "이메일을 입력해 주세요.",
    password: "비밀번호를 입력해 주세요.",
  };

  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [idInputFocused, setIdInputFocused] = useState(false);
  const [pwInputFocused, setPwInputFocused] = useState(false);
  const [isPasswordOpened, setIsPasswordOpened] = useState(false);
  const [isIdError, setIsIdError] = useState("");
  const [isPwError, setIsPwError] = useState("");
  const PasswordInputRef = useRef(null);
  const IdInputRef = useRef(null);

  const handleIdInputFocused = () => {
    setIdInputFocused(true);
  };

  const handlePwInputFocused = () => {
    setPwInputFocused(true);
  };

  const handleEyeButtonClicked = (e) => {
    e.preventDefault();
    if (isPasswordOpened) {
      PasswordInputRef.current.type = "text";
      return setIsPasswordOpened(false);
    }
    PasswordInputRef.current.type = "password";
    return setIsPasswordOpened(true);
  };

  const handleIdInputChange = (e) => {
    setIdValue(e.target.value);
  };

  const handlePwInputChange = (e) => {
    setPwValue(e.target.value);
  };

  useEffect(() => {
    if (IdInputRef.current) {
      IdInputRef.current.addEventListener("focusout", () => {
        const EMAIL_REG_EXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$/;
        if (!idValue.trim()) {
          return setIsIdError("이메일을 입력해 주세요.");
        }
        if (!EMAIL_REG_EXP.test(idValue.trim())) {
          return setIsIdError("올바른 이메일 주소가 아닙니다.");
        }
        return setIsIdError("");
      });
    }
  }, [idValue]);

  useEffect(() => {
    if (PasswordInputRef.current) {
      PasswordInputRef.current.addEventListener("focusout", () => {
        if (!pwValue.trim()) {
          return setIsPwError("비밀번호를 입력해 주세요.");
        }
        return setIsPwError("");
      });
    }
  }, [pwValue]);

  return (
    <form>
      <div className={styles.inputcontainer}>
        <label htmlFor="email">이메일</label>
        <div className={styles.height12box} />
        <input
          className={`${styles.input} ${
            idInputFocused ? styles.focused : ""
          } ${isIdError ? styles.error : ""}`}
          type="email"
          id="email"
          placeholder={PLACEHOLDER.email}
          onFocus={handleIdInputFocused}
          onChange={handleIdInputChange}
          ref={IdInputRef}
          value={idValue}
        />
        <div className={isIdError ? styles.error : ""}>{isIdError}</div>
        <div className={styles.height12box} />
        <div className={styles.height12box} />
        <label htmlFor="password">비밀번호</label>
        <div className={styles.height12box} />
        <input
          className={`${styles.input} ${
            pwInputFocused ? styles.focused : ""
          } ${isPwError ? styles.error : ""}`}
          type="password"
          id="password"
          placeholder={PLACEHOLDER.password}
          onFocus={handlePwInputFocused}
          onChange={handlePwInputChange}
          ref={PasswordInputRef}
          value={pwValue}
        />
        <div className={isPwError ? styles.error : ""}>{isPwError}</div>
        <div onClick={handleEyeButtonClicked}>눈모양 버튼</div>
      </div>
      <button className={styles.button} type="submit">
        {buttontext}
      </button>
    </form>
  );
};
