import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  /* height: ${Dimensions.get('screen').height}px; */
  /* height: 100px; */
`;

export const FooterContainer = styled.View`
  width: ${Dimensions.get('screen').width}px;
  background: ${({theme}) => theme.colors.white};
  align-items: center;
  height: 50px;
`;

export const EmptyView = styled.View`
  align-items: center;
  padding-top: 30px;
`;
