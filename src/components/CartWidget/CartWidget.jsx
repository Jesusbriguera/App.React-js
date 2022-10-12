import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext";

export default function CartWidget({ counter }) {
  const { cartQuantity, cart } = useCart();
  return (
    <div style={{ fontSize: "2em", marginRight: "30px", color: "white" }}>
      <FontAwesomeIcon icon={faCartShopping} />
      <span style={{ margin: "12px" }}>{cartQuantity() || ""}</span>
    </div>
  );
}
