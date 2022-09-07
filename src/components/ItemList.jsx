import React from "react";
import Item from "./Item";

export default function ItemList({ listaProductos }) {
  return (
    <div className="cardContainer">
      {listaProductos.map((productos) => (
        <Item key={productos.id} productos={productos} />
      ))}
    </div>
  );
}
