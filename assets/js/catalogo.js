document.addEventListener("DOMContentLoaded", () => {
  const A = window.GMLApp, G = window.GML, $ = A.$, esc = A.esc, norm = A.norm;
  const cats = window.GML_CATEGORIES, all = A.PRODUCTS, PAGE = 24;
  const params = new URLSearchParams(location.search);
  const st = { cat: params.get("cat") || "", q: params.get("q") || "", brand: "", sub: "", motor: "", sort: "rel", shown: PAGE };
  if (!cats.find((c) => c.id === st.cat)) st.cat = "";
  $("#q").value = st.q;

  const hay = (p) => norm([p.name, p.brand, p.code, p.sub, p.summary, p.motor, (p.specs || []).map((s) => s.join(" ")).join(" "), p.variants ? p.variants.items.map((v) => v.code + " " + v.name).join(" ") : ""].join(" "));
  const idx = new Map(all.map((p) => [p.id, hay(p)]));

  function filtered(ignore) {
    const toks = norm(st.q).split(/\s+/).filter(Boolean);
    let r = all.filter((p) => {
      if (st.cat && p.cat !== st.cat) return false;
      if (ignore !== "brand" && st.brand && p.brand !== st.brand) return false;
      if (ignore !== "sub" && st.sub && p.sub !== st.sub) return false;
      if (ignore !== "motor" && st.motor && p.motor !== st.motor) return false;
      const h = idx.get(p.id); return toks.every((t) => h.includes(t));
    });
    if (st.sort === "az") r = [...r].sort((a, b) => a.name.localeCompare(b.name, "es"));
    return r;
  }
  function renderSide() {
    const counts = {}; all.forEach((p) => (counts[p.cat] = (counts[p.cat] || 0) + 1));
    $("#side").innerHTML = `<h4>Categorías</h4><ul><li><button data-c="" class="${!st.cat ? "on" : ""}">Todo el catálogo <small>${all.length}</small></button></li>${cats.map((c) => `<li><button data-c="${c.id}" class="${st.cat === c.id ? "on" : ""}">${esc(c.name)} <small>${counts[c.id] || 0}</small></button></li>`).join("")}</ul>`;
  }
  function render() {
    const cat = cats.find((c) => c.id === st.cat);
    $("#title").textContent = cat ? cat.name : st.q ? `Resultados para “${st.q}”` : "Catálogo";
    $("#crumb").textContent = cat ? cat.name : "Catálogo";
    $("#desc").textContent = cat ? cat.desc : "Explore nuestros equipos, repuestos y lubricantes. Agregue lo que le interese a su pedido y reciba su cotización por WhatsApp.";
    document.title = (cat ? cat.name : "Catálogo") + " · Global de Maquinaria y Lubricantes";
    // marcas
    const base = all.filter((p) => !st.cat || p.cat === st.cat);
    const brands = [...new Set(base.map((p) => p.brand).filter(Boolean))].sort();
    const sel = $("#brand"); sel.innerHTML = `<option value="">Todas las marcas</option>` + brands.map((b) => `<option ${b === st.brand ? "selected" : ""}>${esc(b)}</option>`).join("");
    // subcategorías
    const subs = [...new Set(base.map((p) => p.sub).filter(Boolean))];
    $("#subs").innerHTML = subs.length > 1 && st.cat ? `<button class="chip ${!st.sub ? "on" : ""}" data-s="">Todos</button>` + subs.map((s) => `<button class="chip ${st.sub === s ? "on" : ""}" data-s="${esc(s)}">${esc(s)}</button>`).join("") : "";
    // líneas de repuestos
    if (st.cat === "repuestos-fuera-de-borda") {
      const motors = [...new Set(base.map((p) => p.motor).filter(Boolean))];
      $("#lines").innerHTML = `<div class="lines"><h3>Más de 750 referencias de repuestos</h3><p>Nuestro inventario cubre estas líneas de motor. Consulte la referencia completa en <a style="color:var(--red);font-weight:600" href="${G.marineparts}" target="_blank" rel="noopener">MarineParts Cloud</a> o pídanos la cotización indicando el motor y la pieza.</p><div class="chips">${(window.GML_REPUESTOS_LINEAS || []).map((l) => `<a class="chip" target="_blank" rel="noopener" href="${A.waLink("Hola, necesito un repuesto para el motor " + l.name)}">${esc(l.name)} <small>${l.count} ref.</small></a>`).join("")}</div></div>` +
        (motors.length > 1 ? `<div class="chips"><span class="count" style="align-self:center">Con foto, por motor:</span><button class="chip ${!st.motor ? "on" : ""}" data-m="">Todos</button>${motors.map((m) => `<button class="chip ${st.motor === m ? "on" : ""}" data-m="${esc(m)}">${esc(m)}</button>`).join("")}</div>` : "");
    } else $("#lines").innerHTML = "";
    const r = filtered();
    $("#count").textContent = `${r.length} producto${r.length === 1 ? "" : "s"}`;
    $("#grid").innerHTML = r.slice(0, st.shown).map(A.card).join("");
    $("#more").hidden = r.length <= st.shown;
    $("#empty").hidden = r.length > 0;
    $("#emptyWa").href = A.waLink("Hola, estoy buscando: " + (st.q || "un equipo"));
    renderSide();
  }
  function url() { const p = new URLSearchParams(); if (st.cat) p.set("cat", st.cat); if (st.q) p.set("q", st.q); history.replaceState(null, "", "catalogo.html" + (p.toString() ? "?" + p : "")); }
  $("#side").addEventListener("click", (e) => { const b = e.target.closest("button[data-c]"); if (!b) return; st.cat = b.dataset.c; st.sub = st.brand = st.motor = ""; st.shown = PAGE; url(); render(); $("#side").classList.remove("open"); scrollTo({ top: 0, behavior: "smooth" }); });
  $("#subs").addEventListener("click", (e) => { const b = e.target.closest("[data-s]"); if (!b) return; st.sub = b.dataset.s; st.shown = PAGE; render(); });
  $("#lines").addEventListener("click", (e) => { const b = e.target.closest("button[data-m]"); if (!b) return; st.motor = b.dataset.m; st.shown = PAGE; render(); });
  $("#brand").addEventListener("change", (e) => { st.brand = e.target.value; st.shown = PAGE; render(); });
  $("#sort").addEventListener("change", (e) => { st.sort = e.target.value; render(); });
  let t; $("#q").addEventListener("input", (e) => { clearTimeout(t); t = setTimeout(() => { st.q = e.target.value; st.shown = PAGE; url(); render(); }, 180); });
  $("#more").addEventListener("click", () => { st.shown += PAGE; render(); });
  $("#ftoggle").addEventListener("click", () => $("#side").classList.toggle("open"));
  render();
});
