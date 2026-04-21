document.body.classList.add("loading");

window.addEventListener("load", () => {
document.body.classList.remove("loading");
});


const content = document.getElementById("content");

// 🔥 DEVONO ESSERE GLOBALI
let currentStyle = null;
let currentScript = null;

async function loadPage(page, push = true) {
try {
content.classList.add("fade-out");

setTimeout(async () => {
  const res = await fetch(`${page}.html`);
  const html = await res.text();

  content.innerHTML = html;

  // ===============================
  // RIMUOVI CSS PRECEDENTE
  // ===============================
  if (currentStyle) {
    currentStyle.remove();
    currentStyle = null;
  }

  // ===============================
  // RIMUOVI JS PRECEDENTE
  // ===============================
  if (currentScript) {
    currentScript.remove();
    currentScript = null;
  }

  // ===============================
  // CARICA CSS DELLA PAGINA
  // ===============================
  const cssPage= page.split("/")[1]
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = `../dist/css/${cssPage}.css`;
  document.head.appendChild(style);
  currentStyle = style;

  // ===============================
  // CARICA JS DELLA PAGINA
  // ===============================
  const script = document.createElement("script");
  script.src = `../dist/${page}.js`;
  script.defer = true;

  document.body.appendChild(script);
  currentScript = script;

  // animazione
  content.classList.remove("fade-out");
  content.classList.add("fade-in");

  setTimeout(() => {
    content.classList.remove("fade-in");
  }, 300);

}, 300);

if (push) {
  history.pushState({ page }, "", `?page=${page}`);
}

} catch (err) {
console.error(err);
content.innerHTML = "<h2>Errore nel caricamento</h2>";
}
}

// CLICK NAVIGAZIONE
document.addEventListener("click", e => {
const link = e.target.closest("a[data-page]");
if (!link) return;

e.preventDefault();
loadPage(link.dataset.page);
});

// BACK/FORWARD
window.addEventListener("popstate", e => {
const page = e.state?.page || "index";
loadPage(page, false);
});

// CARICAMENTO INIZIALE
const params = new URLSearchParams(window.location.search);
const initialPage = params.get("page");
if (initialPage) loadPage(initialPage, false);
