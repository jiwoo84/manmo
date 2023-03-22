import React, { FC, useState } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import IsModalOpen from "@/State/ModalState";
import ModalContainer from "@/src/component/Modal";
import Map from "@/src/component/Map";
import LandingPage from "@/src/component/LandingMap";

// 아이콘
const IconBars = () => <Icon disabled name="bars" />;
const IconPlus = () => <Icon disabled name="plus" />;

const Notice = styled.div``;
const PlaceBox = styled.div``;
const Img = styled.img``;
const AddPlace = styled.div`
  margin-top: 10px;
  width: 200px;
  heigth: 20px;
  border: solid 2px gray;
  backgroundcolor: yellow;
`;
const PlaceDetail = styled.div``;
const Name = styled.p``;
const Address = styled.p``;
const DetailBtn = styled.button``;

const MakingPage = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(IsModalOpen);
  const [modalContents, setModalContent] = useState("");

  return (
    <>
      <Notice>
        <p>현재 n곳을 추가 가능합니다.</p>
        <p>현재 n명이 투표했습니다.</p>
        <a onClick={() => setIsModalOpen(true)}>투표한 사람 확인하기</a>
      </Notice>
      <AddPlace
        onClick={() => {
          setIsModalOpen(true);
          setModalContent("addPlace");
        }}
      >
        <IconPlus />
      </AddPlace>
      <PlaceBox>
        <IconBars />
        <Img></Img>
        <PlaceDetail>
          <Name></Name>
          <Address></Address>
          <DetailBtn onClick={() => setIsModalOpen(true)}>
            자세히 보기
          </DetailBtn>
        </PlaceDetail>
        <ModalContainer>
          <LandingPage />
        </ModalContainer>
      </PlaceBox>
    </>
  );
};

export default MakingPage;
