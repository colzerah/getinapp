import React from 'react';
import Lottie from 'lottie-react-native';
import {Container, ContentLoading} from './styles';

import {loadingLottie} from '../../assets';
import {Text} from '../Text';

interface ILoadingProps {
  w?: number;
  h?: number;
  title?: string;
}

export function Loading({w = 300, h = 300, title}: ILoadingProps): JSX.Element {
  if (title)
    return (
      <Container>
        {title && <Text title={title} w="Paragraph" />}
        <Lottie
          loop
          source={loadingLottie}
          autoPlay
          style={{height: h, width: w}}
        />
      </Container>
    );
  return (
    <ContentLoading>
      <Lottie
        loop
        source={loadingLottie}
        autoPlay
        style={{height: h, width: w}}
      />
    </ContentLoading>
  );
}
