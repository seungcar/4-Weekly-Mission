import Footer from "../components/Common/Footer";
import Nav from "../components/Common/Nav";
import LinkForm from "../components/LinkForm";
import Search from "../components/Search/Search";
import LinkCategory from "../components/FolderContent/LinkCategory";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFolders, getFolderLinks } from "../api";
import shareIcon from "../image/share.svg";
import penIcon from "../image/pen.svg";
import deleteIcon from "../image/delete.svg";
import "./folder.scss";
import CardGrid from "../components/CardGrid/Cardgrid";
import NoLink from "../components/FolderContent/NoLink";

const Folder = () => {
  const [folders, setFolders] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [folderLinkList, setFolderLinkList] = useState([]);
  const [showButtons, setShowButtons] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await getFolders();
        setFolders(response.data);
      } catch (error) {
        console.error("폴더 데이터 불러오기 실패: ", error);
      }
    };
    fetchFolders();
  }, []);

  useEffect(() => {
    const fetchLinks = async () => {
      const folderId =
        params.folderId === "all" || isNaN(params.folderId)
          ? null
          : +params.folderId;

      try {
        const response = await getFolderLinks(folderId);
        setFolderLinkList(response.data);
      } catch (error) {
        console.error("링크 데이터 불러오기 실패: ", error);
      }
    };

    fetchLinks();
  }, [params.folderId]);

  const onClickCategory = async (categoryName) => {
    console.log("Clicked category:", categoryName);
    if (currentCategory === categoryName) return;

    try {
      const folderId =
        categoryName === "전체"
          ? ""
          : folders.find((folder) => folder.name === categoryName)?.id;
      const response = await getFolderLinks(folderId.toString());
      setCurrentCategory(categoryName);
      setFolderLinkList(response.data);
      setShowButtons(categoryName !== "전체");
    } catch (error) {
      console.error("링크 데이터 불러오기 실패: ", error);
    }
  };

  return (
    <>
      <Nav sticky={false} />
      <header>
        <LinkForm />
      </header>
      <main className="folder">
        <Search />
        <LinkCategory
          categoryList={folders}
          currentCategory={currentCategory}
          onClick={onClickCategory}
        />
        <div className="main-button">
          <h2>{currentCategory}</h2>
          {showButtons && (
            <div className="btn">
              <button>
                <img src={shareIcon} alt="공유 아이콘" />
                공유
              </button>
              <button>
                <img src={penIcon} alt="이름 변경 아이콘" />
                이름변경
              </button>
              <button>
                <img src={deleteIcon} alt="삭제 아이콘" />
                삭제
              </button>
            </div>
          )}
        </div>
        {folderLinkList && folderLinkList.length > 0 ? (
          <CardGrid formattedCards={folderLinkList} />
        ) : (
          <NoLink />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Folder;