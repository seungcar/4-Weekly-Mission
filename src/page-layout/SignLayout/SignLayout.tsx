import { ReactNode } from "react";
import styles from "./SignLayout.module.scss";

interface SignLayoutProps {
  header: ReactNode;
  form: ReactNode;
  footer: ReactNode;
}

export const SignLayout: React.FC<SignLayoutProps> = ({ header, form, footer }) => {
  return (
    <div className={styles.container}>
      {header}
      {form}
      {footer}
    </div>
  );
};