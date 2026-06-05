const products = [
  {
    name: "Motor Fuera de Borda 15 Earrow pata corta y larga",
    image: "./assets/images/motorEarrow15.png",
    description: "",
    price: 5950000,
  },

  {
    name: "Fumigadora Fujita",
    image: "./assets/images/fumigadora_fujita.jpg",
    description: "Equipos agrícolas y fumigación.",
    price: 730000,
  },

  {
    name: "Cortasetos",
    image: "./assets/images/cortasetos.jpg",
    description: "Herramientas profesionales agro.",
    price: 920000,
  },

  {
    name: "Motosierra Fujita",
    image: "./assets/images/motosierra.jpg",
    description: "Equipos de corte",
    price: 980000,
  },

  {
    name: "Guadañadora",
    image: "./assets/images/guadana.jpg",
    description: "Trabajo profesional agrícola.",
    price: 1950000,
  },

  {
    name: "Fumigadora Estacionaria",
    image: "./assets/images/fumigadora.jpg",
    description: "Equipos de fumigación.",
    price: 1800000,
  },

  {
    name: "Concentrado 700 120 ml",
    image: "./assets/images/concentrado700.png",
    description: "Mata Comején Alemán",
    price: 22700,
  },
];

const productGrid = document.getElementById("productGrid");

products.forEach((product) => {
  const card = document.createElement("div");

  card.className = "card";

  card.innerHTML = ` <img
   src="${product.image}"
   alt="${product.name}"
 >

<div class="card-content">

  <h3>${product.name}</h3>

  <p>${product.description}</p>

  <div class="product-price">
    $${product.price.toLocaleString("es-CO")}
  </div>

  <a
    class="btn-whatsapp"
    href="https://wa.me/573108394870?text=Hola%20quiero%20cotizar%20${encodeURIComponent(product.name)}"
    target="_blank"
  >
    Cotizar por WhatsApp
  </a>

</div>


`;

  productGrid.appendChild(card);
});

const spare = [
  {
    name: "Bobina de Carga",
    brand: "Yamaha",
    price: 80000,
    image: "../assets/images/motoresfb/bobina_carga_15.avif",
    description: "Yamaha 15 HP.",
  },

  {
    name: "Caucho Varilla Cambios",
    brand: "Yamaha 15 HP",
    price: 29000,
    image: "../assets/images/motoresfb/caucho_varilla_15.jpg",
    description: "Yamaha 15 HP.",
  },

  {
    name: "Culata",
    brand: "Yamaha",
    price: 340000,
    image: "../assets/images/motoresfb/culata_15_yamaha.jpg",
    description: "Yamaha 15 HP.",
  },
  {
    name: "Helice Suzuki 15 HP",
    brand: "Suzuki",
    price: 250000,
    image: "../assets/images/motoresfb/helice_15_suzuki.jpg",
    description: "Suzuki 15 HP.",
  },
  {
    name: "Bujia Ngk BR8HS-10",
    brand: "Yamaha",
    price: 7500,
    image: "../assets/images/motoresfb/bujiaNgk8.jpg",
    description: "Yamaha 15 HP.",
  },

  {
    name: "Varilla de Basculacion",
    brand: "Yamaha",
    price: 120000,
    image: "../assets/images/motoresfb/varillabasculacion15.jpg",
    description: "Yamaha 15 HP.",
  },
  {
    name: "Helice - Propela",
    brand: "Yamaha",
    price: 240000,
    image: "../assets/images/motoresfb/helice_15_yamaha.jpg",
    description: "Yamaha 15 HP.",
  },
  {
    name: "Helice Estria 663-45947-00",
    brand: "Yamaha",
    price: 370000,
    image: "../assets/images/motoresfb/helice_40estria.jpg",
    description: "Yamaha 40 HP.",
  },
  {
    name: "Helice Pas. 675-45941-00",
    brand: "Yamaha",
    price: 370000,
    image: "../assets/images/motoresfb/helice_40estria.jpg",
    description: "Yamaha 40 HP.",
  },
];

const spareGrid = document.getElementById("spareGrid");

spare.forEach((product) => {
  const card = document.createElement("div");

  card.className = "card";

  card.innerHTML = ` <img
   src="${product.image}"
   alt="${product.name}"
 >

<div class="card-content">

  <h3>${product.name}</h3>

  <p>${product.description}</p>

  <div class="product-price">
    $${product.price.toLocaleString("es-CO")}
  </div>

  <a
    class="btn-whatsapp"
    href="https://wa.me/573108394870?text=Hola%20quiero%20cotizar%20${encodeURIComponent(product.name)}"
    target="_blank"
  >
    Cotizar por WhatsApp
  </a>

</div>


`;

  spareGrid.appendChild(card);
});
