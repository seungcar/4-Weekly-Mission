import FolderList from "../../component/FolderList";
import LinkAddInput from "../../component/LinkAddInput";
import LinkSearchInput from "../../component/LinkSearchInput";
import { useEffect, useState } from "react";
import { getFolderList, getLinkData } from "../../apis/api";
import FolderName from "./FolderName";
import LinkItems from "../../component/LinkItems";
import { Container } from "./style";
import FolderOption from "../../component/FolderOption";

const ALL = {
  id: "ALL",
  name: "전체",
  favorite: false,
};

const FolderPage = () => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(ALL);
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await getFolderList();
        setFolders([ALL, ...data]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const handleClick = (e) => {
    const findFolder = folders.find((item) => String(item.id) === e.target.id);

    setSelectedFolder(findFolder);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await getLinkData(selectedFolder.id);
        setLinks(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [selectedFolder]);

  return (
    <>
      <LinkAddInput />
      <Container>
        <LinkSearchInput />
        <FolderList
          folders={folders}
          selectedFolder={selectedFolder}
          onClick={handleClick}
          isLoading={isLoading}
        />
        <FolderName>
          {selectedFolder.name}
          <FolderOption />
        </FolderName>

        <LinkItems links={links} isLoading={isLoading} />
      </Container>
    </>
  );
};

export default FolderPage;
