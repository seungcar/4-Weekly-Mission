import React from "react";
import styles from "./SignFooter.module.scss";
import KakaoIcon from "public/images/kakao.svg";
import GoogleIcon from "public/images/google.svg";

interface SignFooterProps {
  socialtext: string;
}

export const SignFooter: React.FC<SignFooterProps> = ({ socialtext }) => {
  return (
    <div className={styles.container}>
      <div>{socialtext}</div>
      <div>
        <a href="https://www.kakaocorp.com/">
          <KakaoIcon alt="Kakao Icon" className={styles.icon} />
        </a>
        <a href="https://www.google.com">
          <GoogleIcon alt="Google Icon" className={styles.icon} />
        </a>
      </div>
    </div>
  );
};
