import product1Img from '../assets/products/product-1.jpg'
import product10Img from '../assets/products/product-10.jpg'
import product11Img from '../assets/products/product-11.jpg'
import product12Img from '../assets/products/product-12.jpg'
import product13Img from '../assets/products/product-13.jpg'
import product14Img from '../assets/products/product-14.jpg'
import product15Img from '../assets/products/product-15.jpg'
import product16Img from '../assets/products/product-16.jpg'
import product17Img from '../assets/products/product-17.jpg'
import product18Img from '../assets/products/product-18.jpg'
import product19Img from '../assets/products/product-19.jpg'
import product2Img from '../assets/products/product-2.jpg'
import product3Img from '../assets/products/product-3.jpg'
import product4Img from '../assets/products/product-4.jpg'
import product5Img from '../assets/products/product-5.jpg'
import product6Img from '../assets/products/product-6.jpg'
import product7Img from '../assets/products/product-7.jpg'
import product8Img from '../assets/products/product-8.jpg'
import product9Img from '../assets/products/product-9.jpg'
import additionalProducts from './additionalProducts.js'

const products = [
  {
    id: 1,
    name: 'Планшет Xiaomi POCO Pad C1 4/64Гб, серый',
    category: 'Планшеты',
    price: '12 790 руб.',
    priceNumber: 12790,
    image: product1Img,
  },
  {
    id: 2,
    name: 'Электронная книга Amazon Kindle (11th Gen) 2025 Kids, Space Whale',
    category: 'Планшеты',
    price: '14 990 руб.',
    priceNumber: 14990,
    image: product2Img,
  },
  {
    id: 3,
    name: 'Пленка FUJIFILM INSTAX MINI Instant Film 10 sheets (4547410304251)',
    category: 'Гаджеты',
    price: '1 890 руб.',
    priceNumber: 1890,
    image: product3Img,
  },
  {
    id: 4,
    name: 'Бумага для фотопринтера Mi Portable Photo Printer Paper',
    category: 'Гаджеты',
    price: '1 890 руб.',
    priceNumber: 1890,
    image: product4Img,
  },
  {
    id: 5,
    name: 'Кольцо INMO RING 2 для GO2',
    category: 'Гаджеты',
    price: '10 590 руб.',
    priceNumber: 10590,
    image: product5Img,
  },
  {
    id: 6,
    name: 'Зарядный хаб DJI Battery Charging hub For Mavic Air Part  2',
    category: 'Гаджеты',
    price: '1 990 руб.',
    priceNumber: 1990,
    image: product6Img,
  },
  {
    id: 7,
    name: 'Триммер для носа Enchen Electric Nose Hair Trimmer N3, черный',
    category: 'Красота',
    price: '890 руб.',
    priceNumber: 890,
    image: product7Img,
  },
  {
    id: 8,
    name: 'Сменные насадки Xiaomi MiJia Sonic Electric Toothbrush T700 MBS304 (2шт)',
    category: 'Красота',
    price: '1 890 руб.',
    priceNumber: 1890,
    image: product8Img,
  },
  {
    id: 9,
    name: 'Машинка для стрижки волос Moser 1400 Classic (1400-0051), красный',
    category: 'Красота',
    price: '3 190 руб.',
    priceNumber: 3190,
    image: product9Img,
  },
  {
    id: 10,
    name: 'Беспроводные наушники Apple AirPods Max USB-C (2024), Orange',
    category: 'Аудио',
    price: '40 190 руб.',
    priceNumber: 40190,
    image: product10Img,
  },
  {
    id: 11,
    name: 'Портативная акустика JBL Charge 5, камуфляж',
    category: 'Аудио',
    price: '11 590 руб.',
    priceNumber: 11590,
    image: product11Img,
  },
  {
    id: 12,
    name: 'Смарт-часы Huawei Watch Fit Special Edition, зеленый',
    category: 'Гаджеты',
    price: '3 490 руб.',
    priceNumber: 3490,
    image: product12Img,
  },
  {
    id: 13,
    name: 'Фитнес-трекер Google Fitbit Air, Berry',
    category: 'Гаджеты',
    price: '11 290 руб.',
    priceNumber: 11290,
    image: product13Img,
  },
  {
    id: 14,
    name: 'Виниловый проигрыватель Audio Technica AT-LP60XUSB, Gun metal',
    category: 'Аудио',
    price: '24 990 руб.',
    priceNumber: 24990,
    image: product14Img,
  },
  {
    id: 15,
    name: 'Виниловая пластинка Bob Marley - Legend',
    category: 'Аудио',
    price: '4 290 руб.',
    priceNumber: 4290,
    image: product15Img,
  },
  {
    id: 16,
    name: 'Смартфон Vivo V70 FE 8/256 ГБ, серебристый',
    category: 'Телефоны',
    price: '33 990 руб.',
    priceNumber: 33990,
    image: product16Img,
  },
  {
    id: 17,
    name: 'Диктофон Plaud Note NB-100 ChatGPT, розовый',
    category: 'Аудио',
    price: '15 490 руб.',
    priceNumber: 15490,
    image: product17Img,
  },
  {
    id: 18,
    name: 'Саундбар Yamaha True X-Bar 40A, черный',
    category: 'Аудио',
    price: '39 990 руб.',
    priceNumber: 39990,
    image: product18Img,
  },
  {
    id: 19,
    name: 'Саундбар Marshall Heston 60, кремовый',
    category: 'Аудио',
    price: '57 990 руб.',
    priceNumber: 57990,
    image: product19Img,
  },
]

export default [...products, ...additionalProducts]
