import React from 'react';

import {Container, Label} from './styles';

interface ILabelProps {
  title: string;
  w: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'Lead' | 'Paragraph' | 'Small';
  color?:
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

export function Text({title, w, color = 'darkDown'}: ILabelProps): JSX.Element {
  return (
    <Container>
      <Label w={w} color={color}>
        {title}
      </Label>
    </Container>
  );
}
