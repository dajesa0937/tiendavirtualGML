const products = [
  {
    name: "Bobina de Carga Yamaha 15 HP",
    brand: "Yamaha",
    price: 350000,
    image: "../assets/images/motoresfb/bobina_carga_15.avif",
  },

  {
    name: "Caucho Yamaha 15HP",
    brand: "Yamaha",
    price: 45000,
    image: "../assets/images/motoresfb/caucho_varilla_15.jpg",
  },

  {
    name: "Culata 15 Yamaha",
    brand: "Yamaha",
    price: 120000,
    image: "../assets/images/motoresfb/culata_15_yamaha.jpg",
  },
  {
    name: "Helice Suzuki 15 HP",
    brand: "Suzuki",
    price: 120000,
    image: "../assets/images/motoresfb/helice_15_suzuki.jpg",
  },
  {
    name: "Culata 15 Yamaha",
    brand: "Yamaha",
    price: 120000,
    image: "../assets/images/motoresfb/culata_15_yamaha.jpg",
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
    price: 120000,
    image: "../assets/images/motoresfb/helice_15_yamaha.jpg",
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
