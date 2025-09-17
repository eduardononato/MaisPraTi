import ProductCard from "../../entities/product/ProductCard"
import  Skeleton from "../../shared/ui/Skeleton/Skeleton"

const ProductGrid = ({ isLoading, products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {isLoading
        ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
        : products.map((product) => <ProductCard key={product.id} product={product} />)
      }
    </div>
  );
};

export default ProductGrid;