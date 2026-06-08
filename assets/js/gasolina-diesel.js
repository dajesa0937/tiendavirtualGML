const products = [
  {
    name: "Empaque de Culata 16 HP Briggs Ref 692231 Modelo 326431",
    brand: "Briggs & Stratton",
    price: 35000,
    image: "../assets/images/gasolina-diesel/empaqueculata16.jpg",
  },

  {
    name: "Bujia 16 HP Briggs Ref 796112 Modelo 326431",
    brand: "Briggs & Stratton",
    price: 12000,
    image: "../assets/images/gasolina-diesel/bujia796112.jpg",
  },

  {
    name: "Empaque Culata 18 HP Vanguard Ref 845884 Modelo 356442",
    brand: "Vanguard",
    price: 34000,
    image: "../assets/images/gasolina-diesel/empaqueculata18.jpg",
  },
  {
    name: "Bomba Combustible Vanguard 18 HP 808656 ",
    brand: "Vanguard",
    price: 120000,
    image: "../assets/images/gasolina-diesel/bombacombustible18.jpg",
  },
  {
    name: "Valvula de Combustible Briggs",
    brand: "Briggs & Stratton",
    price: 15000,
    image: "../assets/images/gasolina-diesel/VALVULA.jpg",
  },

  {
    name: "Varilla de Basculacion 15 Yamaha",
    brand: "Yamaha",
    price: 120000,
    image: "../assets/images/motoresfb/varillabasculacion15.jpg",
  },
  {
    name: "Helice - Propela 15 Yamaha",
    brand: "Yamaha",
    price: 240000,
    image: "../assets/images/motoresfb/helice_15_yamaha.jpg",
  },
  {
    name: "Helice Estria 40 Yamaha 663-45947-00",
    brand: "Yamaha",
    price: 370000,
    image: "../assets/images/motoresfb/helice_40estria.jpg",
  },
  {
    name: "Helice Pasador 40 Yamaha 675-45941-00",
    brand: "Yamaha",
    price: 370000,
    image: "../assets/images/motoresfb/helice_40estria.jpg",
  },
];

const productGrid = document.getElementById("productGrid");

products.forEach((product) => {
  productGrid.innerHTML += `

<div class="card">

<img
src="${product.image}"
alt="${product.name}"

>

<div class="card-content">

<h3>${product.name}</h3>

<div class="price">
$${product.price.toLocaleString("es-CO")}
</div>

<a
class="btn-whatsapp"
href="https://wa.me/573108394870?text=Hola,%20quiero%20cotizar%20${encodeURIComponent(product.name)}"
target="_blank">

Cotizar

</a>

</div>

</div>

`;
});
