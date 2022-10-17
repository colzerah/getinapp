import styled from 'styled-components/native';

export const Container = styled.View``;

interface ILabel {
  w: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'Lead' | 'Paragraph' | 'Small';
  color:
    | 'primary'
    | 'darkDown'
    | 'dark'
    | 'darkUp'
    | 'while'
    | 'lightDown'
    | 'light'
    | 'lightMedium'
    | 'lightUp';
}

const labelConfig = {
  H1: {fontSize: '32px', fontFamily: 'Poppins-Bold'},
  H2: {fontSize: '24px', fontFamily: 'Poppins-Bold'},
  H3: {fontSize: '20px', fontFamily: 'Poppins-Bold'},
  H4: {fontSize: '17px', fontFamily: 'Poppins-Bold'},
  H5: {fontSize: '15px', fontFamily: 'Poppins-Bold'},
  H6: {fontSize: '16px', fontFamily: 'Poppins-Bold'},
  Lead: {fontSize: '17px', fontFamily: 'Poppins-Regular'},
  Paragraph: {fontSize: '14px', fontFamily: 'Poppins-Regular'},
  Small: {fontSize: '12px', fontFamily: 'Poppins-Regular'},
};

export const Label = styled.Text<ILabel>`
  font-size: ${({w}) => labelConfig[w].fontSize};
  font-family: ${({w}) => labelConfig[w].fontFamily};
  color: ${({theme, color}) => theme.colors[color]};
`;
