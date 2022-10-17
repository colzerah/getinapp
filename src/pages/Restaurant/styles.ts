import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
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

export const Header = styled.View`
  position: absolute;
  top: 0;
  z-index: 1;
  align-self: center;
  padding-top: 40px;
`;

export const ImageHeader = styled.Image`
  width: ${Dimensions.get('screen').width}px;
  height: 159px;
`;

export const OpacityView = styled.View`
  background-color: ${({theme}) => theme.colors.opacityDark};
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

export const Body = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  flex: 1;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  margin-top: -28px;
`;

export const ViewTitle = styled.View`
  align-self: center;
  padding-top: 38px;
  padding-bottom: 30px;
`;

export const ViewDescription = styled.View`
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
`;

export const Divider = styled.View`
  border-top-width: 0.5px;
  margin-left: 30px;
  margin-right: 30px;
  border-color: ${({theme}) => theme.colors.light};
  padding-bottom: 25px;
`;
