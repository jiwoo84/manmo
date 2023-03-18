import React, { FC } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import IsModalOpen from "@/State/ModalState";
import Modal from "react-modal";
import { Icon } from "semantic-ui-react";

const DialogBox = styled.div``;

const CloseBtn = styled.button`
  position: absolute;
  right: 3%;
  top: 5%;
  border: none;
  background-color: inherit;
  font-size: 1rem;
  cursor: pointer;
`;

const CloseIcon = () => <Icon disabled name="x" />;

const ModalContainer: FC = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(IsModalOpen);

  return (
    <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
      <DialogBox>
        <CloseBtn onClick={() => setIsModalOpen(false)}>
          <CloseIcon />
        </CloseBtn>
      </DialogBox>
    </Modal>
  );
};

export default ModalContainer;
