import { products } from "@/utils/mock";
import ProductCard from "@/components/ProductCard";
import { StaticImageData } from "next/image";

const AllProducts = () => {
  return (
    <div className="flex justify-evenly mt-16 py-10 flex-wrap">
      {products.map((product) => (
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

export default AllProducts;
