const products = [
  {
    name: "Motor Fuera de Borda",
    image: "./assets/images/motorEarrow15.png",
    description: "Motores para pesca y trabajo.",
    price: 7500000,
  },

  {
    name: "Motobomba Fujita",
    image: "./assets/images/fumigadora_fujita.jpg",
    description: "Equipos agrícolas y fumigación.",
    price: 1200000,
  },

  {
    name: "Cortasetos",
    image: "./assets/images/cortasetos.jpg",
    description: "Herramientas profesionales agro.",
    price: 850000,
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
    price: 1150000,
  },

  {
    name: "Fumigadora",
    image: "./assets/images/fumigadora.jpg",
    description: "Equipos de fumigación.",
    price: 450000,
  },

  {
    name: "Concentrado 700",
    image: "./assets/images/concentrado700.png",
    description: "Mata Comején Alemán",
    price: 45000,
  },
  {
    name: "Varilla Basculacion 15 ",
    image: "./assets/images/varillaBasculacion15.jpg",
    description: "Varilla Basculacion Yamarine 15",
    price: 45000,
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

// OCULTAR HEADER EN SCROLL

const header = document.querySelector(".header");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});
