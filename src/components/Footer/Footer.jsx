import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#21081a", marginTop:"20%"}}
      >
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          Precios finales con Iva incluido
        </div>
      </footer>
    </div>
  );
}
