import React from 'react';
import {Text} from '../../components/Text';
import {Avatar} from '../../components/Avatar';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ImageHeader,
  Body,
  Header,
  ViewTitle,
  ViewDescription,
  Divider,
  OpacityView,
  BackArrow,
  ViewArrow,
} from './styles';
import {requestShowRestaurant} from '../../services/requests/requestRestaurants';
import {IData} from '../../dtos/IRestaurantShowDTO';
import {Loading} from '../../components/Loading';
import {arrowWhite} from '../../assets';

export function Restaurant({route}): JSX.Element {
  const {restaurantId} = route.params;
  const {goBack} = useNavigation();
  const [data, setData] = React.useState<IData>({} as IData);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await requestShowRestaurant({
          IdRestaurant: restaurantId,
        });
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.info(err);
        setLoading(false);
      }
    })();
  }, []);

  const {
    name,
    image,
    logo,
    telephone,
    price_range,
    payment_methods,
    website,
    opening_hours,
    description,
  } = data;

  if (loading) return <Loading />;

  return (
    <Container>
      <ViewArrow onPress={() => goBack()}>
        <BackArrow source={arrowWhite} />
      </ViewArrow>
      <Header>
        <Avatar uri={logo} />
      </Header>
      <ImageHeader
        source={{
          uri: image,
        }}
      />
      <OpacityView />
      <Body>
        <ViewTitle>
          <Text title={name} w="H3" />
        </ViewTitle>
        <ViewDescription>
          <Text title="Descrição" w="H5" />
          <Text title={description} w="Paragraph" color="darkUp" />
        </ViewDescription>
        <ViewDescription>
          <Text title="Contato" w="H5" />
          <Text title={telephone} w="Paragraph" color="darkUp" />
          <Text title={website} w="Paragraph" color="darkUp" />
        </ViewDescription>
        <ViewDescription>
          <Text title="Faixa de preço" w="H5" />
          <Text title={price_range} w="Small" color="darkUp" />
        </ViewDescription>
        <Divider />
        <ViewDescription>
          <Text title="Horários de Funcionamento" w="H5" />
          <Text title={opening_hours} w="Small" color="darkUp" />
        </ViewDescription>
        <ViewDescription>
          <Text title="Formas de pagamento" w="H5" />
          <Text title={payment_methods} w="Small" color="darkUp" />
        </ViewDescription>
      </Body>
    </Container>
  );
}
