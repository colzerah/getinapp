import styled from 'styled-components/native';

export const Container = styled.View`
  height: 121px;
  width: 121px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.white};
  border-radius: 60px;
  align-items: center;
  justify-content: center;
`;

export const ContentBorder = styled.View`
  height: 120px;
  width: 120px;
  border-width: 4px;
  border-color: ${({theme}) => theme.colors.browDown};
  border-radius: 60px;
  align-items: center;
  justify-content: center;
`;

export const ContentBorderSecundary = styled.View`
  height: 110px;
  width: 110px;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.white};
  border-radius: 60px;
  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.Image`
  height: 105px;
  width: 105px;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  border-width: 1px;
`;
