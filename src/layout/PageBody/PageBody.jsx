import "./PageBody.css";
import { useLocation } from "react-router-dom";

export const PageBody = ({ pageInfo, serchInfo, searchBar, cardList }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === "/shared") {
    return (
      <div className="PageBody">
        {pageInfo}
        <div className="PageBody-items">
          {searchBar}
          {cardList}
        </div>
      </div>
    );
  } else if (currentPath === "/folder") {
    return (
      <div className="PageBody">
        {serchInfo}
        <div className="PageBody-items">
          {searchBar}
          {cardList}
        </div>
      </div>
    );
  }
};
