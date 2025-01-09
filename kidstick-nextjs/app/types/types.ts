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

export interface Service {
  id: number
  title: string
  image: string
  description: string
  rating: number
  reviews: number
  currentPrice: number
  originalPrice: number
}

export interface Event {
  id: number;
  date: string;
  month: string;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  startTime: string;
  endTime: string;
  location: string;
  price: number;
  borderColor: string;
  textColor: string;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  img: string;
}

export interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface Teacher {
  id: number
  name: string
  role: string
  image: string
  showSocial?: boolean
}

export interface FAQItem {
  id: string
  question: string
  answer: string | React.ReactNode
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  imageSrc: string;
  border: string;
  color: string;
}

