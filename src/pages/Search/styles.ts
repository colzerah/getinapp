import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const ViewArrow = styled.Pressable`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 46px;
  left: 39px;
  z-index: 2;
`;

export const BackArrow = styled.Image`
  height: 14px;
  width: 10px;
`;

export const Content = styled.View`
  width: ${Dimensions.get('window').width}px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.white};
`;

export const ViewTitle = styled.View`
  padding-top: 40px;
  padding-bottom: 30px;
  align-items: center;
`;

export const ViewInput = styled.View`
  padding-bottom: 30px;
`;

export const CardButton = styled.Pressable``;

export const HeaderContent = styled.View`
  align-self: center;
  padding-left: 10px;
  margin-top: 10px;
  width: 330px;
`;
