import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function ItemDetail({ productDetail }) {
  const { id, nombre, precio, img, stock, descripcion } = productDetail;
  const [count, setCount] = useState(1);
  const [compra, setCompra] = useState(false);
  const navegar = useNavigate();
  const { addItem, addItem2 } = useCart();

  const onAdd = () => {
    let purchase = {
      id,
      nombre,
      precio,
      stock,
      descripcion,
      img,
      quantity: count,
    };
    setCompra(true);
    addItem(purchase);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <h2>Detalle de: {nombre}</h2>
        <img src={img} alt={nombre} style={{ width: "25rem" }} />
        <p style={{ fontSize: "1.5rem", margin: "20px" }}>{descripcion}</p>
        <p style={{ fontSize: "2rem" }}>${precio}</p>

        {!compra ? (
          <ItemCount
            stock={stock}
            initial={1}
            onAdd={onAdd}
            count={count}
            setCount={setCount}
          />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <button
              className="btn btn-warning"
              style={{ margin: "10px" }}
              onClick={() => navegar("/")}
            >
              Seguir Comprando
            </button>
            <button className="btn btn-info" onClick={() => navegar("/cart")}>
              Ir al carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
