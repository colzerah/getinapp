import styled from 'styled-components/native';

export const Container = styled.View`
  width: 148px;
  height: 160px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  border-radius: 18px;
`;

export const ImageCard = styled.Image`
  flex: 1;
  border-radius: 8px;
`;

export const OpacityView = styled.View`
  background-color: ${({theme}) => theme.colors.opacityDark};
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.white};
  position: absolute;
  bottom: 0;
  padding: 10px;
`;
