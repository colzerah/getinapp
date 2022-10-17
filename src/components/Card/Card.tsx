import React from 'react';
import {Image, View} from 'react-native';
import {Text} from '../Text';

import {Container, ImageCard, OpacityView, Title} from './styles';

interface ICardProps {
  image: string;
  name: string;
}

export function Card({image, name}: ICardProps): JSX.Element {
  return (
    <Container>
      <ImageCard
        resizeMode="stretch"
        source={{
          uri: image,
          cache: 'reload',
        }}
      />
      <OpacityView />
      <Title>{name}</Title>
    </Container>
  );
}
