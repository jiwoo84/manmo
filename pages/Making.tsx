import React, { FC } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import IsModalOpen from "@/State/ModalState";
import ModalContainer from "@/src/component/Modal";

// 아이콘
const IconExampleDisabled = () => <Icon disabled name="bars" />;

const Notice = styled.div``;
const PlaceBox = styled.div``;
const Img = styled.img``;
const PlaceDetail = styled.div``;
const Name = styled.p``;
const Address = styled.p``;
const DetailBtn = styled.button``;

const MakingPage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(IsModalOpen);

  return (
    <>
      <Notice>
        <a>투표한 사람 확인하기</a>
      </Notice>
      <PlaceBox>
        <IconExampleDisabled />
        <Img></Img>
        <PlaceDetail>
          <Name></Name>
          <Address></Address>
          <DetailBtn onClick={() => setIsModalOpen(true)}>
            자세히 보기
          </DetailBtn>
        </PlaceDetail>
        <ModalContainer />
      </PlaceBox>
    </>
  );
};

export default MakingPage;
