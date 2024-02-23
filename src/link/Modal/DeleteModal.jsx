import React from "react";
import styled from "styled-components";

const DeleteModal = ({ onClose }) => {
  return (
    <ModalBack>
      <ModalBox className="modal_delete_box">
        <Button className="modal_delete_closeButton" onClick={onClose}>
          ❌
        </Button>
        <ModdalChild className="modal_delete_child">링크 삭제</ModdalChild>
        <DeleteButton placeholder="sdkfnsdkfn">삭제하기</DeleteButton>
      </ModalBox>
    </ModalBack>
  );
};

const ModalBack = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalBox = styled.div`
  position: fixed;
  width: 360px;
  height: 238px;
  background-color: white;
  border-radius: 20px;
  border: none;
  display: flex;
  justify-content: center;
`;

const ModdalChild = styled.div`
  padding-bottom: 5px;
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 600;
`;

const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
`;

const DeleteButton = styled.button`
  width: 280px;
  height: 50px;
  padding: 16px 20px;
  border-radius: 8px;
  background: #ff5b56;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-top: 30px;
`;

export default DeleteModal;
