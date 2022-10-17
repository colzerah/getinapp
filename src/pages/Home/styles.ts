import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Body = styled.View``;

export const HeaderContainer = styled.View`
  width: ${Dimensions.get('window').width}px;
  align-items: center;
`;

export const TitleView = styled.View`
  position: absolute;
  z-index: 1;
  padding-top: 50px;
  padding-left: 33px;
  padding-right: 112px;
`;

export const SubTitleView = styled.View`
  position: absolute;
  z-index: 1;
  padding-top: 146px;
  padding-left: 33px;
  padding-right: 27px;
`;

export const HeaderImage = styled.Image`
  width: ${Dimensions.get('window').width}px;
`;

export const HeaderContentImage = styled.View`
  padding-bottom: 45px;
`;

export const HeaderContentSearch = styled.View`
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  position: absolute;
  background-color: ${({theme}) => theme.colors.white};
  bottom: 0px;
  padding-top: 32px;
  padding-bottom: 45px;
  width: ${Dimensions.get('window').width}px;
  align-items: center;
`;

export const HeaderContent = styled.View`
  align-self: center;
  padding-left: 10px;
  margin-top: 10px;
  width: 330px;
`;

export const FooterContainer = styled.View`
  width: ${Dimensions.get('screen').width}px;
  background: ${({theme}) => theme.colors.white};
  align-items: center;
`;

export const CardButton = styled.Pressable``;
