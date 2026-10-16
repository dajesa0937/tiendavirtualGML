/* Configuración general del sitio GML.
   Para activar precios y compra en línea más adelante:
   1) Cargue el precio (en pesos) en el campo `price` de cada producto en data.js.
   2) Cambie showPrices a true.
   3) Cambie checkout a "online" y conecte su pasarela de pagos en assets/js/pedido.js (función enviarPedidoEnLinea). */
window.GML = {
  nombre: "Global de Maquinaria y Lubricantes",
  whatsapp: "573108394870",
  celular: "310 839 4870",
  fijo: "505 2013",
  email: "gml.globaldemaquinaria@gmail.com",
  direccion: "Calle 79 B sur No. 79 A 221, Medellín",
  marineparts: "https://marineparts-frontend-app.onrender.com/",
  showPrices: false,
  checkout: "whatsapp" // "whatsapp" (hoy) | "online" (a futuro)
};
