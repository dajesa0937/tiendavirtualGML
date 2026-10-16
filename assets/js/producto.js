document.addEventListener("DOMContentLoaded", () => {
  const A = window.GMLApp, G = window.GML, $ = A.$, esc = A.esc;
  const id = new URLSearchParams(location.search).get("id");
  const p = A.byId(id);
  const view = $("#view");
  if (!p) {
    $("#crumbs").innerHTML = `<a href="index.html">Inicio</a> › <a href="catalogo.html">Catálogo</a>`;
    view.innerHTML = `<div class="empty" style="margin:30px 0"><b>No encontramos ese producto.</b><p style="margin-top:8px"><a class="btn btn-red btn-sm" href="catalogo.html">Ir al catálogo</a></p></div>`;
    return;
  }
  const cat = A.catById(p.cat);
  document.title = p.name + " · Global de Maquinaria y Lubricantes";
  const md = document.createElement("meta"); md.name = "description"; md.content = (p.summary || p.name).slice(0, 155); document.head.appendChild(md);
  $("#crumbs").innerHTML = `<a href="index.html">Inicio</a> › <a href="catalogo.html">Catálogo</a> › <a href="catalogo.html?cat=${cat.id}">${esc(cat.name)}</a> › ${esc(p.name)}`;
  const hasVar = p.variants && p.variants.items.length;
  const price = G.showPrices && p.price ? `<div class="price">${A.money(p.price)}</div>` : `<div class="consult">Precio y disponibilidad: agréguelo a su pedido y le cotizamos.</div>`;
  const specs = (p.specs || []).filter((s) => s[1]);
  view.innerHTML = `<div class="pd">
    <div class="gal">${p.image ? `<img src="${p.image}" alt="${esc(p.name)}">` : A.noImg(p.cat)}${p.image ? `<small>Imagen de referencia${p.refPhoto ? " de la línea" : ""}; puede variar del modelo disponible.</small>` : ""}</div>
    <div>
      ${p.brand ? `<div class="br">${esc(p.brand)}</div>` : ""}
      <h1>${esc(p.name)}</h1>
      ${p.code ? `<div class="code">Referencia: <b>${esc(p.code)}</b></div>` : ""}
      <p class="sum">${esc(p.summary || "")}</p>
      ${p.note ? `<div class="note">${esc(p.note)}</div>` : ""}
      <div class="buy">
        ${hasVar ? `<div><label for="var">${esc(p.variants.label)}</label><select id="var">${p.variants.items.map((v, i) => `<option value="${esc(v.code)}" ${i === 0 ? "selected" : ""}>${esc(v.code)} — ${esc(v.name)}</option>`).join("")}</select></div>` : ""}
        ${price}
        <div class="row">
          <div class="qty"><button type="button" id="minus" aria-label="Menos">−</button><input id="qty" value="1" inputmode="numeric" aria-label="Cantidad"><button type="button" id="plus" aria-label="Más">+</button></div>
          <button class="btn btn-red" id="add" style="flex:1">Agregar a mi pedido</button>
        </div>
        <a class="btn btn-wa" id="wa" target="_blank" rel="noopener" href="#">Cotizar este producto por WhatsApp</a>
      </div>
      ${(p.feats || []).length ? `<ul class="feats">${p.feats.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
      ${specs.length ? `<div class="specs"><h2>Características</h2><table>${specs.map((s) => `<tr><th>${esc(s[0])}</th><td>${esc(s[1])}</td></tr>`).join("")}</table></div>` : ""}
      <p class="warranty">Garantía por defectos de fabricación comprobados por el fabricante. No incluye mala instalación, mal manejo ni golpes. Consulte disponibilidad y condiciones comerciales con nuestro equipo.</p>
    </div></div>`;
  const q = $("#qty");
  const val = () => Math.max(1, parseInt(q.value) || 1);
  $("#minus").onclick = () => (q.value = Math.max(1, val() - 1));
  $("#plus").onclick = () => (q.value = val() + 1);
  q.onchange = () => (q.value = val());
  const variant = () => ($("#var") ? $("#var").value : "");
  const vname = () => { if (!hasVar) return ""; const v = p.variants.items.find((x) => x.code === variant()); return v ? ` (${v.code} — ${v.name})` : ""; };
  const refresh = () => ($("#wa").href = A.waLink(`Hola, quiero cotizar: ${p.name}${vname()} · Cantidad: ${val()}`));
  refresh(); q.addEventListener("input", refresh); $("#minus").addEventListener("click", refresh); $("#plus").addEventListener("click", refresh); if ($("#var")) $("#var").addEventListener("change", refresh);
  $("#add").onclick = () => { A.Cart.add(p.id, variant(), val()); A.toast("Agregado a su pedido"); };
  // relacionados
  const rel = A.PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id && (!p.sub || x.sub === p.sub)).slice(0, 4);
  const more = rel.length < 4 ? rel.concat(A.PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id && !rel.includes(x)).slice(0, 4 - rel.length)) : rel;
  if (more.length) $("#related").innerHTML = `<div class="sh"><div><h2>También le puede interesar</h2></div><a class="more" href="catalogo.html?cat=${cat.id}">Ver ${esc(cat.name)} →</a></div><div class="grid">${more.map(A.card).join("")}</div>`;
});
