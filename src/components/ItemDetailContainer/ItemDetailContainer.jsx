import React, { useEffect, useState } from "react";
import { data } from "../mocks/mockData";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  console.log(productDetail);
  useEffect(() => {
    data
      .then((res) => setProductDetail(res.find((item) => item.id === id)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemDetail productDetail={productDetail} />
      )}
    </div>
  );
}
