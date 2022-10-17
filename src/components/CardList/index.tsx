import React, {ReactNode} from 'react';
import {FlatList} from 'react-native';
import {IRestaurantsData} from '../../dtos/IRestaurantsListDTO';
import {Loading} from '../Loading';
import {Text} from '../Text';

import {Container, EmptyView, FooterContainer} from './styles';

interface ICardListProps {
  data: IRestaurantsData[] | [];
  renderItem: any;
  onEndReached?(): void;
  loading: boolean;
  listHeaderComponent?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ComponentType<any>
    | null
    | undefined;
}

export function CardList({
  data,
  renderItem,
  onEndReached,
  loading,
  listHeaderComponent,
}: ICardListProps): JSX.Element {
  return (
    <Container>
      <FlatList
        ListHeaderComponent={listHeaderComponent}
        columnWrapperStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
        data={data}
        renderItem={renderItem}
        scrollEventThrottle={1}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id}
        onEndReached={onEndReached}
        ListEmptyComponent={
          <EmptyView>
            <Text
              title="Nenhum restaurante encontrado"
              w="Lead"
              color="darkUp"
            />
          </EmptyView>
        }
        ListFooterComponent={
          <FooterContainer>
            {loading && <Loading title="Carregando" w={50} h={50} />}
          </FooterContainer>
        }
      />
    </Container>
  );
}
