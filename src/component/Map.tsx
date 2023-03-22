import styled from "styled-components";
import { FC, useEffect, useState } from "react";
import { propsType } from "./LandingMap";

declare global {
  interface Window {
    kakao: any;
  }
}

interface placeType {
  place_name: string;
  road_address_name: string;
  address_name: string;
  phone: string;
  place_url: string;
}

const Map = () => {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        };
        const map = new window.kakao.maps.Map(container, options);
      });
    };

    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  return <MapContainer id="map" />;
};

const MapContainer = styled.div`
  aspect-ratio: 320 / 220;
`;
const MenuWrap = styled.div``;
const Option = styled.div``;
const Form = styled.form``;
const PlacesList = styled.ul``;
const Pagination = styled.div``;
const Keyword = styled.input``;
const SearchBtn = styled.button``;

export default Map;
