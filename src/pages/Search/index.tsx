import React from 'react';
import {CardList} from '../../components/CardList';
import {requestListRestaurants} from '../../services/requests/requestRestaurants';
import {Input} from '../../components/Input';
import {Text} from '../../components/Text';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  CardButton,
  Content,
  HeaderContent,
  ViewTitle,
  ViewInput,
  BackArrow,
  ViewArrow,
} from './styles';
import {IRestaurantsData} from '../../dtos/IRestaurantsListDTO';
import {Card} from '../../components/Card/Card';
import {arrowBlack} from '../../assets';

export function Search(): JSX.Element {
  const {navigate, goBack} = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [restaurants, setRestaurants] = React.useState<IRestaurantsData[] | []>(
    [],
  );
  const [filteredRestaurants, setFilteredRestaurants] = React.useState<
    IRestaurantsData[] | []
  >([]);

  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    (async () => {
      try {
        const response = await requestListRestaurants({});
        setRestaurants(response.data);
      } catch (err) {
        console.info(err);
        setRestaurants([]);
      }
    })();
  }, []);

  React.useEffect(() => {
    if (inputValue === '') {
      setFilteredRestaurants([]);
    } else {
      setFilteredRestaurants(
        restaurants.filter(
          item =>
            item.name.toUpperCase().indexOf(inputValue.toUpperCase()) > -1,
        ),
      );
    }
  }, [inputValue]);

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

  return (
    <Container>
      <CardList
        listHeaderComponent={
          <Content>
            <ViewArrow
              onPress={() => {
                goBack();
              }}>
              <BackArrow source={arrowBlack} />
            </ViewArrow>
            <ViewTitle>
              <Text title="Resultados para" w="Paragraph" color="lightDown" />
              <Text title="Termo pesquisado" w="H5" color="darkDown" />
            </ViewTitle>
            <ViewInput>
              <Input
                focus
                value={inputValue}
                onChange={setInputValue}
                placeholder="Encontre um restaurante"
              />
            </ViewInput>
            <HeaderContent>
              <Text title="Restaurantes" w="H5" />
            </HeaderContent>
          </Content>
        }
        data={filteredRestaurants}
        renderItem={renderItem}
        loading={loading}
      />
    </Container>
  );
}
