import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
// import { data } from "../../mocks/mockData";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export default function ItemListContainer({ saludo, greeting }) {
  const [listaProductos, setlistaProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    const products = categoriaId
      ? query(
          collection(db, "productos"),
          where("categoria", "==", categoriaId)
        )
      : collection(db, "productos");
    getDocs(products)
      .then((result) => {
        const lista = result.docs.map((producto) => {
          return {
            id: producto.id,
            ...producto.data(),
          };
        });
        setlistaProductos(lista);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  // useEffect(() => {
  //   setLoading(true);
  //   data
  //     .then((res) => {
  //       if (categoriaId) {
  //         setlistaProductos(
  //           res.filter((item) => item.categoria === categoriaId)
  //         );
  //       } else {
  //         setlistaProductos(res);
  //       }
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false));
  // }, [categoriaId]);

  // console.log(listaProductos);

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
