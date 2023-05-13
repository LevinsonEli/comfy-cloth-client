import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Our mission at the Comfy Sloth is to provide high-quality, stylish and affordable furniture solutions that meet the diverse needs of our customers. We strive to create a welcoming and comfortable atmosphere that promotes creativity and inspiration, to help our customers transform their homes into a beautiful and functional space.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'We aim to be the one-stop destination for all your home furnishing needs. We strive to offer a wide range of furniture pieces that are not just functional but also aesthetically pleasing. We also aim to make the shopping experience hassle-free and enjoyable for our customers by offering exceptional customer service and a user-friendly website.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Founded in 1985 Comfy Sloth started as a small family-owned business, but now it has grown to become a well-established furniture store in the community.We did our best to establish relationships with suppliers and manufacturers to ensure we offered the best products to our customers. Today, our store continues to prioritize quality and affordability.',
  },
];

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
