"use client";

import Link from "next/link";
import logo from "/public/logo.webp";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import { RootState } from "@/store/store";

const header = () => {
  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  return (
    <div className="flex justify-between items-center py-6 px-8">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-40" />
      </Link>
      <ul className="flex gap-x-3">
        <li className="text-lg">
          <Link href={"category/female"}>Female</Link>
        </li>
        <li className="text-lg">
          <Link href={"category/male"}>Male</Link>
        </li>
        <li className="text-lg">
          <Link href={"category/kids"}>Kids</Link>
        </li>
        <li className="text-lg">
          <Link href={"category/sports"}>Sports</Link>
        </li>
        <li className="text-lg">
          <Link href={"/product"}>All Products</Link>
        </li>
      </ul>
      <div className="search-bar flex relative">
        <Search className="absolute top-2 left-2" />
        <Input
          className="px-10 rounded-full"
          type="text"
          placeholder="What you looking for?"
        />
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center relative">
        <span className="absolute right-1 top-0 rounded-full bg-red-500 w-5 h-5 text-white text-sx text-center">
          {cartValue}
        </span>
        <ShoppingCart />
      </div>
    </div>
  );
};

export default header;
