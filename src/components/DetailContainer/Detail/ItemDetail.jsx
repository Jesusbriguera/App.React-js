import React from "react";

export default function ItemDetail({ productDetail }) {
  const { id, nombre, precio, img } = productDetail;

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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
          necessitatibus reiciendis rerum maiores molestias corporis accusamus
          magnam quo ad libero dolorum sed cum dolores placeat voluptate et.
          Mollitia, fugit quis.
        </p>
      </div>
    </div>
  );
}
