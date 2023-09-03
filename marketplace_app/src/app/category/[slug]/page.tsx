import { products } from "@/utils/mock";
import ProductCard from "@/components/ProductCard";
import { StaticImageData } from "next/image";

const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductsByCategory(params.slug);
  return (
    <div className="flex justify-evenly mt-16">
      {result.length > 0 ? (
        result.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            img={product.image as StaticImageData}
            category={product.category as string}
            id={product.id}
          />
        ))
      ) : (
        <p>No Products Found</p>
      )}
    </div>
  );
}
