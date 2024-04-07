import React from "react";
import styles from "./SignForm.module.scss";

interface SignFormProps {
  buttontext: string;
}

export const SignForm: React.FC<SignFormProps> = ({ buttontext }) => {
  return (
    <form>
      <div className={styles.inputcontainer}>
        <label htmlFor="email">이메일</label>
        <div className={styles.height12box} />
        <input type="email" id="email" />
        <div className={styles.height12box} />
        <div className={styles.height12box} />
        <label htmlFor="password">비밀번호</label>
        <div className={styles.height12box} />
        <input type="password" id="password" />
      </div>
      <button className={styles.button} type="submit">
        {buttontext}
      </button>
    </form>
  );
};
