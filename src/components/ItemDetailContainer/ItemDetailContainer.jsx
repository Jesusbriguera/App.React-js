import { collection, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
// import { data } from "../../mocks/mockData";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const coleccionProductos = collection(db, "productos");
    const referenciaDoc = doc(coleccionProductos, id);

    getDoc(referenciaDoc)
      .then((result) => {
        setProductDetail({
          id: result.id,
          ...result.data(),
        });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  // useEffect(() => {
  //   data
  //     .then((res) => setProductDetail(res.find((item) => item.id === id)))
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false));
  // }, [id]);

  return (
    <div>
      {loading ? (
        <p style={{fontSize:"40px", marginLeft:"37%", marginTop:"15%"}}>Cargando...</p>
      ) : (
        <ItemDetail productDetail={productDetail} />
      )}
    </div>
  );
}
