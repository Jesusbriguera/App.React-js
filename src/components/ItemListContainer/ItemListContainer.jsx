import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { data } from "../mocks/mockData";

export default function ItemListContainer({ saludo, greeting }) {
  const [listaProductos, setlistaProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    data
      .then((res) => {
        if (categoriaId) {
          setlistaProductos(
            res.filter((item) => item.categoria === categoriaId)
          );
        } else {
          setlistaProductos(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  console.log(listaProductos);
  return (
    <div className="App">
      <p>{saludo}</p>

      <p>{greeting}</p>
      <div className="cardContainer">
        <ItemList listaProductos={listaProductos} />
      </div>
    </div>
  );
}
