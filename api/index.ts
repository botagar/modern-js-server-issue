import { useContext } from '@modern-js/runtime/server';

export default async () => {
  const { req } = useContext();
  console.log(req.headers);

  return {
    message: 'Hello Modern.js',
  };
};

export const post = async () => ({
  message: 'Hello Modern.js',
});
