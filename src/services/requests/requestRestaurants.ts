import api from '../api';
import {
  IIRestaurantsListParams,
  IIRestaurantsListResponse,
} from '../../dtos/IRestaurantsListDTO';
import {
  IIRestaurantShowParams,
  IIRestaurantShowResponse,
} from '../../dtos/IRestaurantShowDTO';

export const requestListRestaurants = async ({
  page,
  limit,
}: IIRestaurantsListParams): Promise<IIRestaurantsListResponse> => {
  if (page && limit) {
    const response = await api.get('/', {params: {page, limit}});
    return response.data;
  }
  const response = await api.get('/');
  return response.data;
};

export const requestShowRestaurant = async ({
  IdRestaurant,
}: IIRestaurantShowParams): Promise<IIRestaurantShowResponse> => {
  const response = await api(`/${IdRestaurant}`);
  return response.data;
};
