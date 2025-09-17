import ThemeProvider from "./providers/ThemeProvider";
import ShopPage from "../pages/store/ShopPage"
import Navbar from "../widgets/Navbar/Navbar"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-250">
        <Navbar />
        <ShopPage />
      </div>
    </ThemeProvider>
  );
}

export default App;