import producto1 from "./img/producto1.png";
import producto2 from "./img/producto2.png";
import producto3 from "./img/producto3.png";
import producto4 from "./img/producto4.png";

const productos = [
  {
    id: "1",
    nombre: "Chocopause Milka x 45gr",
    precio: 200,
    img: producto1,
    categoria: "chocolates",
    stock: 10,
  },
  {
    id: "2",
    nombre: "Oreo Bañadas x 119gr",
    precio: 600,
    img: producto2,
    categoria: "alfajores",
    stock: 10,
  },
  {
    id: "3",
    nombre: "Oblea Kit Kat Gold x 45gr",
    precio: 300,
    img: producto3,
    categoria: "chocolates",
    stock: 10,
  },
  {
    id: "4",
    nombre: "M&M Confite x 47.9G",
    precio: 250,
    img: producto4,
    categoria: "bombones",
    stock: 10,
  },
];
export default productos;

export const data = new Promise((resolve, reject) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve(productos);
    } else {
      reject("Error");
    }
  }, 3000);
});
