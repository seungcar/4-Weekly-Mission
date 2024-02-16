const BASEURL = 'https://bootcamp-api.codeit.kr/api';

export const userDataAPI = async () => {
  const APIData = { email: null, image: null };
  try {
    const response = await fetch(`${BASEURL}/sample/user`);
    if (response.ok) {
      const result = await response.json();
      APIData.email = result.email;
      APIData.image = result.profileImageSource;
      return APIData;
    }
    throw new Error('데이터 불러오기 실패');
  } catch (error) {
    /*eslint-disable-next-line */
    console.error(error);
    return null;
  }
};

export const folderDataAPI = async () => {
  const APIData = {
    userName: null,
    userImage: null,
    name: null,
    cardData: null,
  };
  try {
    const response = await fetch(`${BASEURL}/sample/folder`);
    if (response.ok) {
      const { folder } = await response.json();
      APIData.userName = folder.owner.name;
      APIData.userImage = folder.owner.profileImageSource;
      APIData.name = folder.name;
      APIData.cardData = folder.links;
      return APIData;
    }
    throw new Error('데이터 불러오기 실패');
  } catch (error) {
    /*eslint-disable-next-line */
    console.error(error);
    return null;
  }
};

export const categoryDataAPI = async () => {
  try {
    const response = await fetch(`${BASEURL}/users/1/folders`);
    if (response.ok) {
      const { data } = await response.json();
      return data;
    }
    throw new Error('데이터 불러오기 실패');
  } catch (error) {
    /*eslint-disable-next-line */
    console.error(error);
    return null;
  }
};

export const categoryFolderDataAPI = async (CategoryID) => {
  if (CategoryID === '0') {
    try {
      const response = await fetch(`${BASEURL}/users/1/links`);
      if (response.ok) {
        const { data } = await response.json();
        return data;
      }
      throw new Error('데이터 불러오기 실패');
    } catch (error) {
      /*eslint-disable-next-line */
      console.error(error);
      return null;
    }
  } else {
    try {
      const response = await fetch(`${BASEURL}/users/1/folders/${CategoryID}`);
      if (response.ok) {
        const { data } = await response.json();
        return data;
      }
      throw new Error('데이터 불러오기 실패');
    } catch (error) {
      /*eslint-disable-next-line */
      console.error(error);
      return null;
    }
  }
};
