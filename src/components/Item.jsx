import React from 'react'


export default function Item({productos}) {
    return (
        <div style={{border:"solid 5px", margin: "5px 45%", width:"8rem"}}>
            <div style={{margin:"5px"}}>{productos.nombre}</div> 
            <div>${productos.precio}</div>
            <img src={productos.img} width="100" alt={productos.nombre} />
        </div>
)
}
