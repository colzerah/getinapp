import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {requestListRestaurants} from '../../services/requests/requestRestaurants';
import {Card} from '../../components/Card/Card';
import {headerBackground} from '../../assets';
import {
  Container,
  HeaderContent,
  HeaderContainer,
  Body,
  HeaderImage,
  HeaderContentImage,
  HeaderContentSearch,
  FooterContainer,
  TitleView,
  SubTitleView,
  CardButton,
} from './styles';
import {IRestaurantsData} from '../../dtos/IRestaurantsListDTO';
import {CardList} from '../../components/CardList';
import {Text} from '../../components/Text';
import {Input} from '../../components/Input';
import {Keyboard} from 'react-native';

export function Home(): JSX.Element {
  const [limit, setLimit] = React.useState(10);
  const {navigate} = useNavigation();
  const [havePagination, setHavePagination] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [restaurants, setRestaurants] = React.useState<IRestaurantsData[] | []>(
    [],
  );

  React.useEffect(() => {
    (async () => {
      if (havePagination) {
        setLoading(true);
        try {
          const response = await requestListRestaurants({page: 1, limit});
          if (limit > response.data.length) {
            setHavePagination(false);
          }
          setRestaurants(response.data);
        } catch (err) {
          console.info(err);
          setRestaurants([]);
        }
        setLoading(false);
      }
    })();
  }, [limit]);

  const renderItem = ({item}) => {
    return (
      <CardButton
        onPress={() =>
          navigate('Restaurant' as never, {restaurantId: item.id} as never)
        }>
        <Card image={item.image} name={item.name} />
      </CardButton>
    );
  };

  const handleEndReached = React.useCallback(() => {
    setLimit(limit + 10);
  }, [limit]);

  return (
    <Container>
      <Body>
        <CardList
          listHeaderComponent={
            <HeaderContainer>
              <HeaderContentImage>
                <TitleView>
                  <Text title={`Descubra novos\nsabores`} w="H2" />
                </TitleView>
                <SubTitleView>
                  <Text
                    title={`Aqui eu converso com você sobre\nnossa proposta`}
                    w="Lead"
                  />
                </SubTitleView>

                <HeaderImage source={headerBackground} />
              </HeaderContentImage>
              <HeaderContentSearch>
                <Input
                  type="button"
                  onPress={() => {
                    Keyboard.dismiss();
                    setTimeout(() => {
                      navigate('Search' as never);
                    }, 500);
                  }}
                  placeholder="Encontre um restaurante"
                />
              </HeaderContentSearch>
              <HeaderContent>
                <Text title="Restaurantes" w="H5" />
              </HeaderContent>
            </HeaderContainer>
          }
          data={restaurants}
          renderItem={renderItem}
          onEndReached={handleEndReached}
          loading={loading}
        />
      </Body>
    </Container>
  );
}
