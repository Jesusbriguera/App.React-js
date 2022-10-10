// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../src/components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";

function App() {
  // const saludo = "Hola Mundo";

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="PRODUCTOS" />}
          />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/Cart" element={<Cart />} />
          <Route />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
        <div className="App" style={{ marginTop: "100px" }}>
          {/* Footer */}
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
