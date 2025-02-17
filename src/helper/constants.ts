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
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
      },
      {
        title: 'Bao',
        maxItems: 2,
        price: '$9',
        qty: 0,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
      },
      {
        title: 'Burger',
        maxItems: 2,
        price: '$3.99',
        qty: 0,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
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
  {
    name: 'Burger King',
    id: 3,
    description: 'A fast food chain',
    rating: '4.6',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1200px-Burger_King_2020.svg.png',
    menu: [
      {
        title: 'Fries',
        maxItems: 8,
        price: '$1.23',
        qty: 0,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
      },
      {
        title: 'Burger',
        maxItems: 6,
        price: '$7',
        qty: 0,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
      },
      {
        title: 'Cold drink',
        maxItems: 2,
        price: '$0.99',
        qty: 0,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
      },
      {
        title: 'Wrap',
        maxItems: 2,
        price: '$4.99',
        qty: 0,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
      },
      {
        title: 'Garlic bread',
        maxItems: 4,
        price: '$11.99',
        qty: 0,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
      },
    ],
  },
  {
    name: `Wendy's`,
    id: 4,
    description: 'A fast food restaurant',
    rating: '4.1',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr677Y0tVOyWTR-mshWP-pNjt8FVj8lWAl9Q&s',
    menu: [
      {
        title: 'Sushi',
        maxItems: 5,
        price: '$5',
        qty: 0,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
      },
      {
        title: 'Bao',
        maxItems: 2,
        price: '$9',
        qty: 0,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
      },
      {
        title: 'Burger',
        maxItems: 2,
        price: '$3.99',
        qty: 0,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
      },
    ],
  },
  {
    name: 'Burgrill',
    id: 5,
    description:
      'A fast food restaurant for burgers. We are specialised in creating outstanding burgers and fries',
    rating: '4.8',
    image: 'https://burgrill.in/uploads/24125ffad7b077fe68764aebdae504ce.jpg',
    menu: [
      {
        title: 'Burger',
        maxItems: 5,
        price: '$5',
        qty: 0,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
      },
      {
        title: 'Fries',
        maxItems: 2,
        price: '$2',
        qty: 0,
        image:
          'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg',
      },
      {
        title: 'Coke',
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
  icon: 'https://www.freeiconspng.com/uploads/google-wallet-icon-9.png',
  name: 'Google Pay',
  tick: 'https://static.vecteezy.com/system/resources/thumbnails/017/350/123/small_2x/green-check-mark-icon-in-round-shape-design-png.png',
};
