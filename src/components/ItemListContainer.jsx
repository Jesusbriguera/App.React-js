import React, { useEffect, useState } from "react";
import { customFetch } from "./customFetch";
import ItemDetailContainer from "./DetailContainer/Detail/ItemDetailContainer";
import ItemList from "./ItemList";
import productos from "./productos";

export default function ItemListContainer({ saludo, greeting }) {
  const [listaProductos, setlistaProductos] = useState([]);

  useEffect(() => {
    customFetch(productos).then((data) => setlistaProductos(data));
  }, []);

  console.log(listaProductos);
  return (
    <div className="App">
      <p>{saludo}</p>

      <p>{greeting}</p>

      <ItemList listaProductos={listaProductos} />

      <ItemDetailContainer />
    </div>
  );
}
