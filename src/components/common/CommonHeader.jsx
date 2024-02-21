import { Children, useEffect, useState } from "react";
import style from "../../styles/CommonHeader.module.css";
import NavigationBar from "../NavigationBar";
import { getData } from "../api";

// SharedHeader에서는 Profile을 받아오고, FolderHeader에서는 LinkAdd를 받아옴
function CommonHeader({ headerType, children }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(headerType);
        setProfile(data);
      } catch (error) {
        console.error("에러가 발생했습니다.", error);
        setProfile(null);
      }
    };
    fetchData();
  }, [headerType]);

  return (
    <div className={style.CommonHeader}>
      <NavigationBar profile={profile} />
      {children}
    </div>
  );
}

export default CommonHeader;