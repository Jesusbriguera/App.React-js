import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Item({ productos }, { Item }) {
  const { id, img, nombre, precio, stock, descripcion } = productos;
  const navegar = useNavigate();

  return (
    <div
      className="card"
      style={{
        width: "15rem",
        height: "25rem",
        margin: ".2rem",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          backgroundImage: `url('${img}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          width: "100&",
          height: "20rem",
        }}
      />

      <div className="card-body">
        <p className="card-text fw-bold" style={{ fontSize: "1.2rem" }}>
          {nombre}
        </p>

        <p className="card-text" style={{ fontSize: "1.5rem" }}>
          ${precio}
        </p>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => navegar(`/detalle/${id}`)}
      >
        Ver más
      </button>
    </div>
  );
}
