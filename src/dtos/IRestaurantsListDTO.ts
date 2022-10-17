export interface IIRestaurantsListParams {
  page?: number;
  limit?: number;
}

export interface IIRestaurantsListResponse {
  success: boolean;
  pagination: {
    total: number;
    per_page: number;
  };
  data: IRestaurantsData[];
}

export interface IRestaurantsData {
  id: string;
  name: string;
  image: string;
  logo: string;
  description: string;
  telephone: string;
  price_range: string;
  payment_methods: string;
  website: string;
  opening_hours: string;
}
