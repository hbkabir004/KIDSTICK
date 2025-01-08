export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  discount: number;
}

export interface Service{
  id: number
  title: string
  image: string
  description: string
  rating: number
  reviews: number
  currentPrice: number
  originalPrice: number
}

