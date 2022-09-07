import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function CartWidget({ counter }) {
  return (
    <div style={{ fontSize: "2em", marginRight: "30px" }}>
      <span>
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
      <span style={{ margin: "10px" }}>{counter}</span>
    </div>
  );
}
