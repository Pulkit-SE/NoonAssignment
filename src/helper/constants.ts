import {Dimensions} from 'react-native';

export const CAROUSEL_DATA = [];

export const RESTAURANT_DATA = [
  {
    name: 'Kinoki',
    id: 1,
    description: 'A pan asian restaurant',
    rating: '4.5',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeeLiytIhEzR_s5fBzWl2Va0s1jy5gseyhA&s',
    menu: [
      {
        title: 'Sushi',
        maxItems: 5,
        price: '$5',
        qty: 0,
      },
      {
        title: 'Bao',
        maxItems: 2,
        price: '$9',
        qty: 0,
      },
      {
        title: 'Burger',
        maxItems: 2,
        price: '$3.99',
        qty: 0,
      },
    ],
  },
  {
    name: 'McDonalds',
    id: 2,
    description: 'A fast food chain',
    rating: '4.2',
    image:
      'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2017/06/mcdonalds-sign-1497007560.jpg',
    menu: [
      {
        title: 'Pizza',
        maxItems: 8,
        price: '$2.99',
        qty: 0,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
      },
      {
        title: 'Fries',
        maxItems: 10,
        price: '$1.99',
        qty: 0,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
      },
      {
        title: 'Roll',
        maxItems: 1,
        price: '$3.99',
        qty: 0,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
      },
    ],
  },
];

export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('screen').height;

export const PAYMENT_METHOD = {
  icon: 'https://w7.pngwing.com/pngs/667/120/png-transparent-google-pay-2020-hd-logo.png',
  name: 'Google Pay',
  tick: 'https://static.vecteezy.com/system/resources/thumbnails/017/350/123/small_2x/green-check-mark-icon-in-round-shape-design-png.png'
};
