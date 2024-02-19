import deleteImg from "../images/delete.svg";
import penImg from "../images/pen.svg";
import shareImg from "../images/share.svg";
import styles from "./FolderOptions.module.css";

function FolderOptions({ folderName, folderId }) {
  return (
    folderName && (
      <>
        <div className={styles.folderName}>{folderName}</div>
        {folderId !== 1 && (
          <div className={styles.optionContainer}>
            <div className={styles.option}>
              <img src={shareImg} alt="share" />
              <p className={styles.optionText}>공유</p>
            </div>
            <div className={styles.option}>
              <img src={penImg} alt="pen" />
              <p>이름 변경</p>
            </div>
            <div className={styles.option}>
              <img src={deleteImg} alt="delete" />
              <p>삭제</p>
            </div>
          </div>
        )}
      </>
    )
  );
}

export default FolderOptions;
