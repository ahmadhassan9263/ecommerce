import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroGirl from "/public/heroGirl.webp";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-10 py-8">
      {/* Left Div */}
      <div className="flex-1">
        <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-300">
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold flex-wrap tracking-tight lg:text-6xl mt-6">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="bg-black text-white h-12 px-5 mt-4 hover:bg-black">
          <ShoppingCart className="mr-3" />
          Start Shopping
        </Button>
        {/*Logo Icons*/}
      </div>
      {/* Right Div */}
      <div className="flex-1">
        <Image src={heroGirl} alt={"Hero Girl"} width={650} height={650} />
      </div>
    </section>
  );
};

export default hero;
