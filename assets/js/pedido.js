document.addEventListener("DOMContentLoaded", () => {
  const A = window.GMLApp, G = window.GML, $ = A.$, esc = A.esc, Cart = A.Cart;

  function lines() {
    return Cart.read().map((it) => {
      const p = A.byId(it.id); if (!p) return null;
      const v = p.variants ? p.variants.items.find((x) => x.code === it.v) : null;
      return { it, p, v };
    }).filter(Boolean);
  }
  function render() {
    const L = lines(), box = $("#items");
    $("#form").style.display = L.length ? "" : "none";
    if (!L.length) {
      box.innerHTML = `<div class="empty"><b>Su pedido está vacío.</b><p style="margin:8px 0 16px">Explore el catálogo y agregue los equipos o repuestos que le interesen.</p><a class="btn btn-red" href="catalogo.html">Ir al catálogo</a></div>`; return;
    }
    box.innerHTML = L.map(({ it, p, v }) => `<div class="lineitem">
      <a class="im" href="producto.html?id=${esc(p.id)}">${p.image ? `<img src="${p.image}" alt="">` : A.catIcon(p.cat)}</a>
      <div><h3><a href="producto.html?id=${esc(p.id)}">${esc(p.name)}</a></h3>
        <small>${[p.brand ? esc(p.brand) : "", v ? esc(v.code) + " — " + esc(v.name) : p.code ? "Ref. " + esc(p.code) : ""].filter(Boolean).join(" · ")}</small>
        <button class="rm" data-rm="${esc(it.id)}" data-v="${esc(it.v)}">Quitar</button></div>
      <div class="q2"><div class="qty"><button data-m="${esc(it.id)}" data-v="${esc(it.v)}" aria-label="Menos">−</button><input value="${it.q}" data-q="${esc(it.id)}" data-v="${esc(it.v)}" inputmode="numeric" aria-label="Cantidad"><button data-p="${esc(it.id)}" data-v="${esc(it.v)}" aria-label="Más">+</button></div></div>
    </div>`).join("") + `<button class="btn btn-line btn-sm" id="clear">Vaciar pedido</button>`;
  }
  const q = (id, v) => (Cart.read().find((x) => x.id === id && (x.v || "") === (v || "")) || {}).q || 1;
  document.addEventListener("click", (e) => {
    const t = e.target.closest("button"); if (!t) return;
    if (t.dataset.rm) { Cart.remove(t.dataset.rm, t.dataset.v); render(); }
    else if (t.dataset.m) { Cart.set(t.dataset.m, t.dataset.v, q(t.dataset.m, t.dataset.v) - 1); render(); }
    else if (t.dataset.p) { Cart.set(t.dataset.p, t.dataset.v, q(t.dataset.p, t.dataset.v) + 1); render(); }
    else if (t.id === "clear") { if (confirm("¿Vaciar todo el pedido?")) { Cart.clear(); render(); } }
  });
  document.addEventListener("change", (e) => { const i = e.target.closest("input[data-q]"); if (i) { Cart.set(i.dataset.q, i.dataset.v, i.value); render(); } });

  function texto() {
    const d = { n: $("#n").value.trim(), t: $("#t").value.trim(), c: $("#c").value.trim(), e: $("#e").value.trim(), o: $("#o").value.trim() };
    const L = lines().map(({ it, p, v }, i) => `${i + 1}. ${p.name}${v ? ` [${v.code} — ${v.name}]` : p.code ? ` [Ref. ${p.code}]` : ""} × ${it.q}`);
    return `Hola, quiero solicitar cotización en Global de Maquinaria y Lubricantes:\n\n${L.join("\n")}\n\nNombre: ${d.n}\nCelular: ${d.t}\nCiudad: ${d.c}${d.e ? `\nCorreo: ${d.e}` : ""}${d.o ? `\nObservaciones: ${d.o}` : ""}`;
  }
  function valid() {
    let ok = true;
    [["n", (v) => v.length > 2], ["t", (v) => v.replace(/\D/g, "").length >= 7], ["c", (v) => v.length > 1]].forEach(([id, fn]) => {
      const f = $("#" + id).closest(".field"); const good = fn($("#" + id).value.trim()); f.classList.toggle("bad", !good); if (!good) ok = false;
    });
    if (!ok) $(".field.bad input").focus();
    return ok;
  }
  /* Punto de extensión para la compra en línea (a futuro). */
  function enviarPedidoEnLinea() { /* Conectar aquí la pasarela de pagos cuando se active G.checkout = "online". */ }
  $("#f").addEventListener("submit", (e) => {
    e.preventDefault(); if (!lines().length || !valid()) return;
    if (G.checkout === "online") return enviarPedidoEnLinea();
    window.open(A.waLink(texto()), "_blank", "noopener");
  });
  $("#copy").addEventListener("click", async () => {
    if (!valid()) return;
    try { await navigator.clipboard.writeText(texto()); A.toast("Lista copiada"); } catch (e) { prompt("Copie su lista:", texto()); }
  });
  $("#mail").addEventListener("click", () => { if (!valid()) return; location.href = `mailto:${G.email}?subject=${encodeURIComponent("Solicitud de cotización")}&body=${encodeURIComponent(texto())}`; });
  document.addEventListener("cart:change", () => {});
  render();
});
