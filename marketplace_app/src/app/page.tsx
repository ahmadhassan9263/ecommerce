import Image from "next/image";
import ProductList from "@/views/ProductList";
import Hero from "@/views/hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* Products */}
      <ProductList />
      {/*Carousel */}
      <Carousel />
    </div>
  );
}
