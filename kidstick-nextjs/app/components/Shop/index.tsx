"use client"

import { Product } from "@/app/types/types";
import { useEffect, useState } from 'react';
import { ProductCard } from "./ProductCard";

export default function ShopSection() {
   const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      const fetchServices = async () => {
        const res = await fetch('https://kidstick-server.vercel.app/services');
        const data = await res.json();
        setProducts(data);
      };
  
      fetchServices();
    }, []);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Explore Our Shop</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Visit our KidStick Shop for high-quality gear and essentials. Find apparel, equipment, and accessories designed to support your child's journey and enhance their experience with KidStick.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-colors">
          All Product
        </button>
      </div>
    </section>
  )
}

