import React, { ReactNode } from 'react';
import styles from "./SignLayout.module.scss";

type SignLayoutProps = {
  children: ReactNode;
};

const SignLayout = ({ children }: SignLayoutProps) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default SignLayout;