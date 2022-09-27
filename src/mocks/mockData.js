

const productos = [
  {
    id: "1",
    nombre: "Chocopause Milka x 45gr",
    precio: 200,
    img: "https://i.postimg.cc/DZVppwL8/producto1.png",
    categoria: "chocolates",
    stock: 10,
  },
  {
    id: "2",
    nombre: "Oreo Bañadas x 119gr",
    precio: 600,
    img: "https://i.postimg.cc/6qF8ngDJ/producto2.png",
    categoria: "alfajores",
    stock: 10,
  },
  {
    id: "3",
    nombre: "Oblea Kit Kat Gold x 45gr",
    precio: 300,
    img: "https://i.postimg.cc/xdjLfDQt/producto3.png",
    categoria: "chocolates",
    stock: 10,
  },
  {
    id: "4",
    nombre: "M&M Confite x 47.9G",
    precio: 250,
    img: "https://i.postimg.cc/s22ZFYPL/producto4.png",
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
  }, 2000);
});
