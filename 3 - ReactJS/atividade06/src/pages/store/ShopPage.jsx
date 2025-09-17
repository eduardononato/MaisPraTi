import { useEffect,useState } from "react";
import  ProductGrid  from "../../widgets/ProductGrid/ProductGrid"
import products from "../../shared/api/mockProducts"

const ShopPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simula 2 segundos de atraso
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 pt-28 pb-8">
      <ProductGrid isLoading={loading} products={products} />
    </div>
  );
};

export default ShopPage