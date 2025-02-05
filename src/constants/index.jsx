import  dish1    from "../assets/dish1.jpg";
import  dish2    from "../assets/dish2.jpeg";
import  dish3    from "../assets/dish3.jpeg";
import  dish4    from "../assets/dish4.jpeg";

import offer1 from "../assets/offer1.jpeg";
import offer2 from "../assets/offer2.jpeg";
import offer3 from "../assets/offer3.jpeg";
import offer4 from "../assets/offer4.jpeg";



export const navItems = [
    { label: "Home", href: "/home" },
    { label: "Menu", href: "menu" },
    { label: "Reservations ", href: "/reservations" },
    { label: "Order Online", href: "/order" },
    { label: "About Us", href: "/about"},
    { label: "Contact Us", href: "/contact" },
  ];

  export const featuredDishes = [
    {
      image: dish1,
      name: 'Spaghetti Carbonara',
      description: 'Creamy and delicious pasta with bacon and eggs.',
      price: '$12.99',
    },
    {
      image: dish2,
      name: 'Grilled Salmon',
      description: 'Fresh salmon grilled to perfection.',
      price: '$18.50',
    },
    {
      image: dish3,
      name: 'Vegetarian Burger',
      description: 'A flavorful veggie burger with all the fixings.',
      price: '$10.75',
    },
    {
      image: dish4,
      name: 'Chicken Tacos',
      description: 'Spicy chicken tacos with fresh toppings.',
      price: '$14.25',
    },
   
  ];

 export const specialOffers = [
    {
      image: offer1,
      title: 'Family Feast',
      description: 'Get 20% off on all family combos',
      discount: '20% off',
    },
    {
      image: offer2,
      title: 'Weekend Special',
      description: 'Free appetizer with any entree',
      discount: 'Free Appetizer',
    },
    {
      image: offer3, 
      title: 'Lunchtime Deal',
      description: 'Special discounts on lunch menus',
      discount: 'Special Discounts',
    },
    {
      image: offer4, 
      title: 'Happy Hour',
      description: 'Enjoy special prices on drinks',
      discount: 'Special Prices',
    },
  ];
 export const testimonials = [
    {
      id: 1,
      name: "John Doe",
      review: "This service is amazing! The support team is very responsive.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Sarah Smith",
      review: "Great experience! Would definitely recommend to others.",
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Mike Johnson",
      review: "Good service but could be improved in some areas.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];
  export const menuItems = [
    { id: 1, name: "🍕 Pizza", price: 8.99 },
    { id: 2, name: "🍔 Burger", price: 5.49 },
    { id: 3, name: "🍣 Sushi", price: 12.99 },
    { id: 4, name: "🥗 Salad", price: 6.99 },
    { id: 5, name: "🍝 Pasta", price: 9.99 },
    { id: 6, name: "🍩 Donuts", price: 3.99 },
  ];
  