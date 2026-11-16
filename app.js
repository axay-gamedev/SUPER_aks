(() => {
  const data = window.SUPERCONDUCTORS || [];
  const $ = (id) => document.getElementById(id);
  let activeFilter = "All";
  let searchTerm = "";

  function renderList() {
    const filtered = data.filter(m => {
      const matchesFilter = activeFilter === "All" || (activeFilter === "High-Tc" ? m.high : m.type === activeFilter);
      const haystack = `${m.name} ${m.formula} ${m.type} ${m.applications}`.toLowerCase();
      return matchesFilter && haystack.includes(searchTerm.toLowerCase());
    });
    $("resultCount").textContent = `${filtered.length} ${filtered.length === 1 ? "entry" : "entries"}`;
    const totalCountEl = $("totalCount");
    if (totalCountEl) totalCountEl.textContent = data.length;
    $("materialList").innerHTML = filtered.length ? filtered.map(m => `
      <button class="material-card" data-id="${m.id}" aria-label="View ${m.name}">
        <span class="material-symbol">${m.symbol}</span>
        <span class="material-main"><b>${m.name}</b><small>${m.formula} · ${m.type}</small></span>
        <span class="material-meta"><strong>${m.tc.replace(" K","")}</strong><small>Tc / K</small></span>
        <span class="arrow">›</span>
      </button>`).join("") : `<div class="empty-state">No materials found. Try another search.</div>`;
    document.querySelectorAll(".material-card").forEach(card => card.addEventListener("click", () => openDetail(card.dataset.id)));
  }

  function openDetail(id) {
    const m = data.find(x => x.id === id); if (!m) return;
    $("detailName").textContent = m.name;
    $("detailSymbol").textContent = m.symbol;
    $("detailFormula").textContent = m.formula;
    $("detailType").textContent = m.type.toUpperCase();
    $("detailTc").textContent = m.tc;
    $("detailClass").textContent = m.type;
    $("detailField").textContent = m.field;
    $("detailFieldNote").textContent = m.fieldNote;
    $("detailApplications").textContent = m.applications;
    $("detailNote").textContent = m.note;
    $("detailSource").textContent = "REFERENCE: " + m.source + " Values are representative, not universal constants.";
    $("detailModal").classList.remove("hidden");
  }

  function closeModal(id) { $(id).classList.add("hidden"); }
  function setTab(tab) {
    ["library","learn"].forEach(t => $(t+"Section").classList.toggle("hidden", t !== tab));
    document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
    if (tab === "library") $("searchInput").blur();
    window.scrollTo({top:0,behavior:"smooth"});
  }

  document.querySelectorAll("[data-tab]").forEach(b => b.addEventListener("click", () => setTab(b.dataset.tab)));
  $("searchInput").addEventListener("input", e => { searchTerm = e.target.value; renderList(); });
  document.querySelectorAll(".filter").forEach(b => b.addEventListener("click", () => {
    activeFilter = b.dataset.filter;
    document.querySelectorAll(".filter").forEach(x => x.classList.toggle("active", x === b));
    renderList();
  }));

  $("closeDetail").addEventListener("click", () => closeModal("detailModal"));
  $("detailModal").addEventListener("click", e => { if (e.target === $("detailModal")) closeModal("detailModal"); });
  $("aboutBtn").addEventListener("click", () => $("aboutModal").classList.remove("hidden"));
  $("closeAbout").addEventListener("click", () => closeModal("aboutModal"));
  $("aboutModal").addEventListener("click", e => { if (e.target === $("aboutModal")) closeModal("aboutModal"); });

  function updateConnection() {
    $("connectionStatus").textContent = navigator.onLine
      ? "Connected · offline cache is available after the first load"
      : "Offline · locally cached app is running";
  }
  window.addEventListener("online", updateConnection);
  window.addEventListener("offline", updateConnection);
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
  renderList();
  updateConnection();
})();