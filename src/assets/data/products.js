import { product1Img, product2Img } from '../images';

const renderProducts1 = () =>
  [...Array(8)].map(() => ({
    title: 'CHIHUAHUA POMERANIAN CHOCO D0001',
    label: 'Pet',
    img: product1Img,
  }));

const renderProducts2 = () =>
  [...Array(8)].map(() => ({
    title: 'NUTRIPE BEEF & GREEN TRIPE',
    label: 'PETS PRODUCT',
    img: product2Img,
  }));

export default [
  ...renderProducts1(),
  ...renderProducts2(),
  ...renderProducts1(),
  ...renderProducts2(),
];
