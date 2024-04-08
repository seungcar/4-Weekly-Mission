import React from "react";
import styles from "./SignHeader.module.scss";
import LinkbraryLogo from "public/images/linkbrary.svg";

interface SignHeaderProps {
  message: string;
  linktext: string;
  linkhref: string;
}

export const SignHeader: React.FC<SignHeaderProps> = ({
  message,
  linktext,
  linkhref,
}) => {
  return (
    <div>
      <a href={linkhref}>
        <LinkbraryLogo alt="Linkbrary Logo" className={styles.logo} />
      </a>
      <div className={styles.signmessage}>
        {message}
        <a href="">{linktext}</a>
      </div>
    </div>
  );
};
