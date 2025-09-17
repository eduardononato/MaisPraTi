import  ThemeToggleButton from "../../features/theme/ThemeToggleButton/ThemeToggleButton"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white shadow-md dark:bg-gray-800 dark:border-b dark:border-gray-700 transition-colors">
      <div className="text-xl font-bold text-gray-800 dark:text-gray-100">Minha Loja</div>
      <div className="flex items-center space-x-4">
        <ThemeToggleButton />
        <span className="text-2xl text-gray-800 dark:text-gray-100" aria-label="Carrinho de compras">🛒</span>
      </div>
    </nav>
  );
};

export default Navbar