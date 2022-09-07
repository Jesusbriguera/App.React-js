import React from "react";

export default function Item({ productos }, { Item }) {
  return (
    <div style={{ border: "solid 5px", width: "9rem", height: "15rem" }}>
      <div style={{ margin: "5px" }}>{productos.nombre}</div>
      <div>${productos.precio}</div>
      <img src={productos.img} width="100" alt={productos.nombre} />
      <button style={{ marginTop: "30px" }}>Agregar al carrito</button>
    </div>
  );
}
