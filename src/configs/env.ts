interface IEnv {
  name: 'dev' | 'production';
  api: string;
}

const AMBIENTE = 'dev';

const envs: IEnv[] = [
  {
    name: 'dev',
    api: 'https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants/',
  },
  {
    name: 'production',
    api: '',
  },
];

const currentEnv = envs.find(env => env.name === AMBIENTE);

export const isProduction = (): boolean => {
  return !!currentEnv && currentEnv.name === 'production';
};

export default currentEnv;
