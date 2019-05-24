import styled from "styled-components/native";

export const LocationContainer = styled.View`
    width: 45;
    height: 45;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 50;
`;

export const LocationAvatar = styled.Image`
    width: 40;
    height: 40;
    border-radius: 50;
`;

export const LocationBlack = styled.View`
    width: 40;
    height: 40;
    border-radius: 50;
    background-color: black;
`;

export const MapContainer = styled.View`
    flex: 1;
    z-index: -99;
`;

export const ButtonLocation = styled.TouchableOpacity`
    z-index: 1;
    position: absolute;
    right: 20;
    bottom: 20;
    width: 50;
    height: 50;
    background-color: #000;
    border-radius: 50;
    justify-content: center;
    align-items: center;
`;

export const calloutTitle = styled.View``;
