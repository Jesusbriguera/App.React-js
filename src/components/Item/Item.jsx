import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Item({ productos }, { Item }) {
  const { id, img, nombre, precio } = productos;
  const navegar = useNavigate();

  return (
    <div
      style={{
        border: "solid 5px",
        width: "10rem",
        height: "18rem",
        margin: "30px",
      }}
    >
      <div style={{ margin: "5px" }}>{productos.nombre}</div>
      <div>${productos.precio}</div>
      <img src={productos.img} width="100" alt={productos.nombre} />
      <button
        className="btn btn-primary"
        style={{ marginTop: "30px" }}
        onClick={() => navegar(`/detalle/${id}`)}
      >
        Ver mas
      </button>
    </div>
  );
}
