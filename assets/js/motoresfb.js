const products = [
  {
    name: "Bobina de Carga Yamaha 15",
    brand: "Yamaha",
    price: 80000,
    image: "../assets/images/motoresfb/bobina_carga_15.jpg",
  },

  {
    name: "Caucho Varilla Cambios",
    brand: "Yamaha 15 HP",
    price: 29000,
    image: "../assets/images/motoresfb/caucho_varilla_15.jpg",
  },

  {
    name: "Culata 15 Yamaha",
    brand: "Yamaha",
    price: 340000,
    image: "../assets/images/motoresfb/culata_15_yamaha.jpg",
  },
  {
    name: "Helice Suzuki 15 HP",
    brand: "Suzuki",
    price: 250000,
    image: "../assets/images/motoresfb/helice_15_suzuki.jpg",
  },
  {
    name: "Bujia Ngk BR8HS-10 Original ",
    brand: "Yamaha",
    price: 7500,
    image: "../assets/images/motoresfb/bujiaNgk8.jpg",
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
  {
    name: "Carcaza Funda 15 Yamarine",
    brand: "Yamaha",
    price: 1100000,
    image: "../assets/images/motoresfb/funda15y.jpg",
  },
  {
    name: "Arranque 15 Yamarine",
    brand: "Yamaha",
    price: 350000,
    image: "../assets/images/motoresfb/arranque15y.jpg",
  },
  {
    name: "Eje Helice 15 Yamarine",
    brand: "Yamaha",
    price: 245000,
    image: "../assets/images/motoresfb/ejehelice.jpg",
  },
  {
    name: "Carter 15 Yamarine",
    brand: "Yamaha",
    price: 1815000,
    image: "../assets/images/motoresfb/carter15.jpg",
  },
  {
    name: "Interrruptor Yamarine",
    brand: "Yamaha",
    price: 48000,
    image: "../assets/images/motoresfb/interruptor15.jpg",
  },
  {
    name: "Empaque Culata 40J-G Yamarine",
    brand: "Yamaha",
    price: 28000,
    image: "../assets/images/motoresfb/empaqueculata40.jpg",
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
