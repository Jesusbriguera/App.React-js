import React, { useEffect, useState } from 'react'

export default function ItemCount() {

  
  const [contador,setContador] = useState(5)
  
    const increase = () => {
      setContador(contador >= 10 ? setContador : contador + 1); //  máximo de 10 
    };
  
    const decrease = () => {
      setContador(contador <= 1 ? setContador : contador - 1); //  mínimo de 1
    };
  
  const confirm = () => {
    alert("Producto agregado al Carrito");
  };


  return (
  <div>
        <button style={{margin: "10px", fontSize: "30px", width:"30px"}} onClick={decrease}> - </button>
    <button style={{margin: "10px", fontSize: "30px"}} onClick={increase}> + </button>
    <h1>{contador}</h1>
    <button style={{margin: "10px", fontSize: "20px"}} onClick={confirm}> Agregar al carrito </button>
  </div>

  )
}
