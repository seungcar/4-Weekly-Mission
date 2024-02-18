import { useState, useEffect } from 'react';
import { getFolder, getUser } from '../api';

import Header from '../components/Header';
import FolderInfo from '../components/FolderInfo';
import FolderContent from '../components/FolderContent';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

const Folder = () => {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState(null);

  const handleLoad = async (getState, setState) => {
    try {
      const state = await getState();
      setState(state);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad(getUser, setUser);
    handleLoad(getFolder, setFolder);
  }, []);

  return (
    <div>
      <Header userInfo={user} />

      <FolderInfo folderInfo={folder} />
      <FolderContent>
        <SearchBar />
        <CardList folderInfo={folder} />
      </FolderContent>

      <Footer />
    </div>
  );
}

export default Folder;