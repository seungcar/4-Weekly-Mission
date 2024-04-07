import React from 'react';
import styles from "./SignForm.module.scss";

interface SignFormProps {
  buttontext: string;
}

export const SignForm: React.FC<SignFormProps> = ({ buttontext }) => {
  return (
    <form>
      <div>
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">{buttontext}</button>
    </form>
  );
};