import Button from "../../shared/ui/Button/Button"

const ProductCard = ({ product }) => {
  return (
    <div className="group relative max-w-xs w-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-250 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800 dark:shadow-sm dark:border dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
      <div className="relative w-full pb-[100%]">
        <img
          src={product.image}
          alt={`Imagem do produto: ${product.title}`}
          className="absolute inset-0 w-full h-full object-contain"
          loading="lazy"
        />
        {product.tag && (
          <span className="absolute top-2 right-2 px-2 py-1 text-xs font-bold text-white bg-blue-500 rounded-full">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 dark:text-gray-100" aria-label={product.title}>
          {product.title}
        </h3>
        <p className="mt-2 text-xl font-semibold text-blue-600 dark:text-blue-400">
          {product.price}
        </p>
        <p className="mt-1 text-sm text-yellow-500">
          {'★'.repeat(Math.floor(product.rating))} ({product.rating})
        </p>
      </div>
      <div className="p-4 pt-0">
        <Button variant="danger" className="w-full text-white" aria-label={`Adicionar ${product.title} ao carrinho`}>Adicionar</Button>
      </div>
    </div>
  );
};

export default ProductCard;