/* Utilidades comunes: iconos, carrito, cabecera y pie. */
(function () {
  const G = window.GML;
  const root = document.documentElement.dataset.root || "";   // "" en la raíz
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const money = (n) => "$" + Number(n).toLocaleString("es-CO");

  /* ---------- iconos (trazo simple) */
  const I = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L21 8H6"/><circle cx="10" cy="20.5" r="1.3"/><circle cx="17" cy="20.5" r="1.3"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.08.9.92-3-.2-.31A8.2 8.2 0 1 1 12.04 20.1Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8s-.39-.12-.55.12-.63.8-.78.96-.29.18-.54.06a6.7 6.7 0 0 1-3.3-2.88c-.25-.43.25-.4.72-1.33a.45.45 0 0 0-.02-.43c-.06-.12-.55-1.33-.76-1.82s-.4-.41-.55-.42h-.47a.9.9 0 0 0-.66.31 2.77 2.77 0 0 0-.86 2.06 4.8 4.8 0 0 0 1 2.55 11 11 0 0 0 4.3 3.8c1.6.69 2.23.75 3.03.63a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .15-1.2c-.06-.1-.22-.16-.47-.28Z"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="m3 8 9 5 9-5M12 13v8"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2h4M12 2v4M9 6h6v4l-1 2h-4l-1-2zM10 12v6l2 3 2-3v-6"/></svg>',
    prop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.8"/><path d="M12 10.2C10.5 7 10.8 4 13 3c2 1.6 1.6 4.8-1 7.2zM13.6 13.1c3.4-.3 6 .9 6.2 3.3-1.9 1.6-5 .5-6.6-2.3zM10.4 13.1c-.3 3.4-2.6 5.3-5 4.6-.9-2.3 1.3-4.9 4.6-5.9z"/></svg>',
    boat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0"/><path d="M5 14 4 9h16l-1 5"/><path d="M12 9V4l4 3"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>',
    engine: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h3l1-2h6l1 2h3v8H4V9Z"/><path d="M2 12v3M22 12v3M10 4h4"/></svg>',
    drop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/></svg>',
    spray: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 11h8v10H8V11Zm2-4h4v4h-4zM14 8h5M19 5v6"/></svg>',
    grain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V8M12 8c0-3 2-5 4-5 0 3-1 5-4 5Zm0 5c0-3-2-5-4-5 0 3 1 5 4 5Zm0 5c0-3 2-5 4-5 0 3-1 5-4 5Zm0 0c0-3-2-5-4-5 0 3 1 5 4 5Z"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15Zm0 0 8-8"/></svg>',
    disc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/></svg>',
    cow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9 2 6M20 9l2-3M6 9c0-2 2-4 6-4s6 2 6 4v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9Z"/><path d="M9.5 13v.5M14.5 13v.5"/></svg>',
    oil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h5l1 3h2v15H7V6h2L8 3Z"/><path d="M10 12h4"/></svg>',
    wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5L21 12.6 12.6 21 3 11.4l8.4-8.4 1.3 1.3a4 4 0 0 0 2 2Z"/></svg>'
  };
  const CATICON = { "motores-fuera-de-borda": "boat", "helices-fuera-de-borda": "prop", bujias: "spark", "repuestos-fuera-de-borda": "wrench", generadores: "bolt", "motores-estacionarios": "engine", motobombas: "drop", fumigacion: "spray", "forrajeras-trituradores": "grain", "labranza-jardineria": "leaf", abrasivos: "disc", ganaderia: "cow", "lubricantes-repuestos": "oil" };
  const icon = (n) => I[n] || I.box;
  const catIcon = (id) => icon(CATICON[id]);

  /* ---------- carrito (localStorage) */
  const KEY = "gml_pedido_v1";
  const Cart = {
    read() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return Cart._mem || []; } },
    write(items) { Cart._mem = items; try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) {} Cart.badge(); document.dispatchEvent(new CustomEvent("cart:change")); },
    add(id, variant, qty) {
      const items = Cart.read(); qty = Math.max(1, parseInt(qty) || 1);
      const it = items.find((x) => x.id === id && (x.v || "") === (variant || ""));
      if (it) it.q += qty; else items.push({ id, v: variant || "", q: qty });
      Cart.write(items);
    },
    set(id, variant, qty) { let items = Cart.read(); items = items.map((x) => (x.id === id && (x.v || "") === (variant || "") ? { ...x, q: Math.max(1, parseInt(qty) || 1) } : x)); Cart.write(items); },
    remove(id, variant) { Cart.write(Cart.read().filter((x) => !(x.id === id && (x.v || "") === (variant || "")))); },
    clear() { Cart.write([]); },
    count() { return Cart.read().reduce((a, b) => a + b.q, 0); },
    badge() { $$(".cartbtn .n").forEach((e) => (e.textContent = Cart.count())); }
  };

  /* ---------- productos */
  const PRODUCTS = window.GML_PRODUCTS || [];
  const byId = (id) => PRODUCTS.find((p) => p.id === id);
  const catById = (id) => (window.GML_CATEGORIES || []).find((c) => c.id === id);
  const noImg = (cat) => `<div class="ni">${catIcon(cat)}<span>Foto próximamente</span></div>`;
  const waLink = (text) => `https://wa.me/${G.whatsapp}?text=${encodeURIComponent(text)}`;

  function keySpecs(p) {
    const want = ["Potencia", "Referencia", "Motor", "Cilindrada", "Capacidad del tanque", "Alcance", "Aplicación", "Presentación", "Viscosidad", "Succión × descarga", "Ciclo"];
    const out = []; for (const w of want) { const s = (p.specs || []).find((x) => x[0] === w); if (s && out.length < 3) out.push(`${s[1]}`); }
    return out;
  }
  function card(p) {
    const href = `${root}producto.html?id=${encodeURIComponent(p.id)}`;
    const ks = keySpecs(p).map((k) => `<span>${esc(k.length > 34 ? k.slice(0, 33) + "…" : k)}</span>`).join("");
    const hasVar = p.variants && p.variants.items.length > 1;
    const price = G.showPrices && p.price ? `<div class="price">${money(p.price)}</div>` : "";
    return `<article class="pc">
      <a class="ph" href="${href}" aria-label="${esc(p.name)}">${p.image ? `<img loading="lazy" src="${root}${p.image}" alt="${esc(p.name)}">` : noImg(p.cat)}${p.tag ? `<span class="tag">${esc(p.tag)}</span>` : ""}</a>
      <div class="bd">
        ${p.brand ? `<div class="br">${esc(p.brand)}</div>` : ""}
        <h3><a href="${href}">${esc(p.name)}</a></h3>
        <div class="ks">${ks}${hasVar ? `<span>${p.variants.items.length} opciones</span>` : ""}</div>
        ${price}
        <div class="ac">
          <a class="btn btn-line btn-sm" href="${href}">Ver detalle</a>
          ${hasVar ? `<a class="btn btn-red btn-sm" href="${href}">Elegir</a>` : `<button class="btn btn-red btn-sm" data-add="${esc(p.id)}">Agregar</button>`}
        </div>
      </div></article>`;
  }

  /* ---------- aviso (toast) */
  let tt;
  function toast(msg) {
    let t = $(".toast"); if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.innerHTML = `${esc(msg)} <a href="${root}pedido.html">Ver mi pedido</a>`; t.classList.add("on"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("on"), 3800);
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-add]"); if (!b) return;
    const p = byId(b.dataset.add); Cart.add(b.dataset.add, "", 1); toast(`Agregado: ${p ? p.name.slice(0, 42) : "producto"}`);
  });

  /* ---------- cabecera y pie */
  const page = document.documentElement.dataset.page || "";
  function layout() {
    const cats = (window.GML_CATEGORIES || []);
    const top = `<div class="topbar"><div class="wrap"><span class="hide-s">📍 ${esc(G.direccion)}</span><a href="tel:+57${G.fijo.replace(/\D/g, "")}">Tel. ${G.fijo}</a><a href="${waLink("Hola, quiero información")}" target="_blank" rel="noopener">WhatsApp ${G.celular}</a><a class="hide-s" href="mailto:${G.email}">${G.email}</a></div></div>`;
    const head = `<header class="header"><div class="wrap">
      <a class="brand" href="${root}index.html" aria-label="Inicio"><img src="${root}assets/img/logo-gml.jpg" alt="Global de Maquinaria y Lubricantes"></a>
      <nav class="nav" id="nav" aria-label="Principal">
        <a href="${root}index.html" class="${page === "home" ? "on" : ""}">Inicio</a>
        <a href="${root}catalogo.html" class="${page === "catalogo" || page === "producto" ? "on" : ""}">Catálogo</a>
        <a href="${root}catalogo.html?cat=repuestos-fuera-de-borda">Repuestos</a>
        <a href="${root}index.html#contacto">Contacto</a>
      </nav>
      <form class="hsearch" action="${root}catalogo.html" role="search"><span class="sr">Buscar</span>${I.search}<input name="q" type="search" placeholder="Buscar equipo, marca o referencia…" autocomplete="off"></form>
      <a class="cartbtn" href="${root}pedido.html" aria-label="Mi pedido">${I.cart}<span class="t">Mi pedido</span><span class="n">0</span></a>
      <button class="burger" aria-label="Menú" aria-expanded="false" aria-controls="nav">${I.menu}</button>
    </div></header>`;
    const foot = `<footer class="footer"><div class="wrap">
      <div><img src="${root}assets/img/logo-gml.jpg" alt="Global de Maquinaria y Lubricantes"><p style="font-size:14px;max-width:36ch">Maquinaria, motores, equipos, repuestos y lubricantes para los sectores agrícola, ganadero, industrial, construcción y pesca.</p></div>
      <div><h4>Catálogo</h4><ul>${cats.map((c) => `<li><a href="${root}catalogo.html?cat=${c.id}">${esc(c.name)}</a></li>`).join("")}</ul></div>
      <div><h4>Contacto</h4><ul><li>${esc(G.direccion)}</li><li>Tel. fijo: ${G.fijo}</li><li>Celular / WhatsApp: ${G.celular}</li><li><a href="mailto:${G.email}">${G.email}</a></li></ul></div>
    </div><div class="fine"><div class="wrap">© ${new Date().getFullYear()} Global de Maquinaria y Lubricantes. Las imágenes son de referencia y pueden variar del modelo disponible. Consulte disponibilidad y condiciones con nuestro equipo comercial.</div></div></footer>
    <a class="wa-float" href="${waLink("Hola, quiero información sobre sus productos")}" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp">${I.wa}</a>`;
    document.body.insertAdjacentHTML("afterbegin", top + head);
    document.body.insertAdjacentHTML("beforeend", foot);
    const burger = $(".burger"), nav = $("#nav");
    burger.addEventListener("click", () => { const o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", o); });
    Cart.badge();
  }
  document.addEventListener("DOMContentLoaded", layout);
  window.GMLApp = { $, $$, esc, norm, money, I, icon, catIcon, Cart, byId, catById, card, waLink, noImg, toast, root, PRODUCTS };
})();
