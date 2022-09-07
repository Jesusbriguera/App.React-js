import React, { useEffect, useState } from "react";
import { data } from "../../mocks/mockData";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);

  console.log(productDetail);
  useEffect(() => {
    data
      .then((res) => setProductDetail(res.find((item) => item.id === 1)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [1]);

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
