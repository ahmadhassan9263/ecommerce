import AddToCart from "@/components/AddToCart";
import Quantity from "@/components/Quantity";
import { products } from "@/utils/mock";
import Image from "next/image";
import { StaticImageData } from "next/image";

const getProductsDetail = (id: number | string) => {
  return products.filter((product) => product.id == id);
};

const sizes = ["XS", "SM", "MD", "LG", "XL"];

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);

  return (
    <div className="flex flex-wrap py-10 mt-16">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between gap-6">
          {/* Left Image */}
          <div>
            <Image src={product.image} alt={product.name} />
          </div>
          {/* Right Content */}
          <div>
            <div>
              <h1 className="text-2xl">{product.name}</h1>
              <h2 className="text-base font-semibold text-gray-400">
                {product.tagline}
              </h2>
            </div>
            <div>
              <h3 className="mt-6 text-xs font-semibold">SELECT SIZE</h3>
              {/* Sizes */}
              <div className="flex gap-x-3">
                {sizes.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="center w-6 h-6 mt-2 duration-300 border rounded-full center hover:shadow-xl"
                    >
                      <span className="text-[10px] font-semibold text-center text-gray-600">
                        {item}
                      </span>
                    </div>
                  );
                })}
                {/* Quantity */}
                <div className="flex gap-x-3 mt-6 items-center">
                  <h3 className="text-[10px] font-semibold">Quantity:</h3>
                  <Quantity />
                </div>
                {/* Add to Cart */}
                <div className="mt-5 flex items-center gap-x-4">
                  <AddToCart />
                  <h2 className="text-2xl font-bold">
                    ${product.price.toFixed(2)}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
