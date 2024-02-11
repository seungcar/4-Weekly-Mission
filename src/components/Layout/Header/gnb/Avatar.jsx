/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import avatarImage from "../../../../assets/Avatar.png";
import Button from "../../../../utils/Button";
import api from "../../../../utils/api";
import "../../../../styles/common.css";

const divStyle = css`
  display: flex;
  gap: 8px;
  justify-contents: center;
`;

const imgWrapperStyle = css`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const imageStyle = css`
  width: 100%;
  height: 100%;
`;

const pStyle = css`
  display: block;
  font-weight: 400;
  font-size: 14px;
  position: relative;
  top: 4px;

  @media screen and (375px <= width <= 767px) {
    display: none;
  }
`;

const btnCss = css`
  display: block;
`;

const Avatar = () => {
  const [data, setData] = useState(null);
  const [isOk, setIsOk] = useState(true);

  const fetchData = async () => {
    try {
      const result = await api("sample/user");
      setData(result.email);
    } catch (error) {
      setIsOk(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div css={divStyle}>
      <div css={imgWrapperStyle}>
        <img src={avatarImage} css={imageStyle} alt="계정이미지" />
      </div>
      <p css={pStyle}>{data}</p>
      <Button name="로그인" size="small" isok={isOk} key={data} css={btnCss} />
    </div>
  );
};

export default Avatar;
