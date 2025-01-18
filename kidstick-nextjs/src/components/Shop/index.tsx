"use client"

import { Product } from "@/src/types/types";
import { useEffect, useState } from 'react';
import Heading from "../common/Heading";
import { ProductCard } from "./ProductCard";

export default function ShopSection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch('https://kidstick-server.vercel.app/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchServices();
  }, []);

  return (
    <section className="bg-[#fcf7ee] overflow-hidden">
      <div className="py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-gray-600 font-semibold mb-5 text-lg">Shop</h2>
          <Heading
            title="Explore Our Shop"
            bgColor="bg-[#FFE3AC]"
          />
          <p className="text-gray-600 mx-auto">
            Visit our KidStick Shop for high-quality gear and essentials. Find apparel, equipment, and accessories designed to support your child&apos;s journey and enhance their experience with KidStick.
          </p>
        </div>

        <div className="relative">
          <img src="/images/products/left-side.png" alt="Left Image" className="absolute -left-64 top-0 transform -translate-y-1/2 w-32 h-32" />
          <div className="relative">
            <img src="/images/products/design-rotate.png" alt="Right Image" className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-64 w-96 h-96 z-0" />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-colors">
            All Product
          </button>
        </div>
      </div>
    </section>
  )
}

