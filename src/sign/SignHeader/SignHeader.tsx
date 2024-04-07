import React from 'react';
import styles from "./SignHeader.module.scss";
import LinkbraryLogo from "public/images/linkbrary.svg";

interface SignHeaderProps {
  message: string;
  linktext: string;
  // linkhref: ;
}

export const SignHeader: React.FC<SignHeaderProps> = ({ message, linktext }) => {
  return (
    <div>
      <a href=""><LinkbraryLogo alt="Linkbrary Logo" className="logo" /></a><div>{message}<a href="">{linktext}</a></div>
    </div>
  );
};