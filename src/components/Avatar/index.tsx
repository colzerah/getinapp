import React from 'react';

import {
  Container,
  AvatarImage,
  ContentBorder,
  ContentBorderSecundary,
} from './styles';

interface IAvatarProp {
  uri: string;
}

export function Avatar({uri}): JSX.Element {
  return (
    <Container>
      <ContentBorder>
        <ContentBorderSecundary>
          <AvatarImage
            source={{
              uri,
            }}
            resizeMode="center"
          />
        </ContentBorderSecundary>
      </ContentBorder>
    </Container>
  );
}
