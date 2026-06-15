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
    name: "Aceite 20W50 4t 1/4 Galon (Gasolina)",
    brand: "Durespo",
    price: 34000,
    image: "../assets/images/gasolina-diesel/aceite20w50.jpg",
  },
  {
    name: "Aceite 15W40 4t 1/4 Galon (Diesel)",
    brand: "Durespo",
    price: 34000,
    image: "../assets/images/gasolina-diesel/aceite15w40.jpg",
  },
  {
    name: "Aceite 2t 1/4 Galon Sintetico(Motor 2 tiempos)",
    brand: "Durespo",
    price: 36000,
    image: "../assets/images/gasolina-diesel/aceite2t.jpg",
  },
  {
    name: "Grasa para guadañas (Motor 2 tiempos)",
    brand: "Durespo",
    price: 14000,
    image: "../assets/images/gasolina-diesel/grasa.jpg",
  },
  {
    name: "Sello Mecanico 11/4 Resorte Largo",
    brand: "yakpower",
    price: 28000,
    image: "../assets/images/gasolina-diesel/Sello-Mecanico.png",
  },
  {
    name: "Buje en Bronce 11/4 Importado",
    brand: "yakpower",
    price: 30000,
    image: "../assets/images/gasolina-diesel/Buje.png",
  },
  {
    name: "Siliconas para motores",
    brand: "Darrow",
    price: 30000,
    image: "../assets/images/gasolina-diesel/silicona.png",
  },
  {
    name: "Kit Bomba 3x3 Alta Presion",
    brand: "Yakpower",
    price: 680000,
    image: "../assets/images/gasolina-diesel/bomba3x3.jpg",
  },
  {
    name: "Kit Piston con Anillos 16 HP STD Marca Fujita",
    brand: "Fujita",
    price: 120000,
    image: "../assets/images/gasolina-diesel/kit_piston.jpg",
  },
  {
    name: "Carburador 16 HPMarca Fujita",
    brand: "Fujita",
    price: 120000,
    image: "../assets/images/gasolina-diesel/carburadorfujita16.jpg",
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
