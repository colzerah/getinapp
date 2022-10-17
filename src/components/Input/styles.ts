import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
`;

export const InputComponent = styled.TextInput`
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({theme}) => theme.colors.lightMedium};
  width: 315px;
  justify-content: center;
  padding-left: 53px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const IconSearch = styled.Image`
  position: absolute;
  left: 21px;
`;
