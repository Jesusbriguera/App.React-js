import React from "react";
import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const productoAgregado = () => {
  toast.success("Producto agregado al carrito", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};

const productoEliminado = () => {
  toast.success("Producto eliminado del carrito", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const addItem = (item) => {
    productoAgregado();
    const existeEnCart = cart.find((prod) => prod.id === item.id);
    if (existeEnCart) {
      const carritoActualizado = cart.map((prod) => {
        if (prod.id === item.id) {
          if (prod.quantity + item.quantity <= prod.stock) {
            return { ...prod, quantity: prod.quantity + item.quantity };
          } else {
            toast.error(
              `Lo sentimos, Stock insuficiente. Máximo ${prod.stock} Unidades`,
              {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
            return { ...prod, quantity: prod.stock };
          }
        } else {
          return prod;
        }
      });
      setCart(carritoActualizado);
    } else {
      setCart([...cart, item]);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
    productoEliminado();
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };

  const cartTotal = () => {
    return cart.reduce((acc, prod) => (acc += prod.precio * prod.quantity), 0);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          clear,
          removeItem,
          isInCart,
          addItem,
          cartQuantity,
          cartTotal,
        }}
      >
        {children}
      </CartContext.Provider>

      <ToastContainer />
    </>
  );
};

export const useCart = () => useContext(CartContext);
