"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { data } from "@/data/data";

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image
          src={
            "https://media.istockphoto.com/id/535695503/photo/pakistan-monument-islamabad.jpg?s=1024x1024&w=is&k=20&c=akCX--lZcyHV2SSebGbu2wvnSJsscQB95K7HxyE0Fhs="
          }
          alt="Image"
          height={500}
          width={500}
        ></Image>
        <p>Pakistan Monument</p>
        <p>$120</p>
      </SwiperSlide>

      {data?.map((item) => (
        <SwiperSlide key={item.id}>
          <Image src={item.image} alt="Image" height={500} width={500} />
          <p>{item.name}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
