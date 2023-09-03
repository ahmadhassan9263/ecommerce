import Image, { StaticImageData } from "next/image";
import p1 from "/public/p1.png";
import p2 from "/public/p2.png";
import p3 from "/public/p3.png";
import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/mock";

const ProductList = () => {
  const productChunks = products.slice(0, 4);
  return (
    <div className="flex justify-evenly mt-16">
      {productChunks.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.category as string}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
