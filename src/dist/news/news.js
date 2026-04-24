const eventi = [
  {
    id: 1,
    titolo: "Introduzione a React — da zero al primo componente",
    categoria: "Workshop",
    data: "05 maggio",
    orario: "Ore 14:00 – 17:00",
    aula: "Aula B3, Polo Informatico",
  },
  {
    id: 2,
    titolo: "Seminar: AI Generativa e LLM — applicazioni pratiche nel 2025",
    categoria: "Tecnologia",
    data: "09 maggio",
    orario: "Ore 10:30 – 12:30",
    aula: "Aula Magna",
  },
  {
    id: 3,
    titolo: "Node.js hands-on: REST API con Express e MongoDB",
    categoria: "Workshop",
    data: "15 maggio",
    orario: "Ore 15:00 – 18:00",
    aula: "Lab 2, Edificio C",
  },
  {
    id: 4,
    titolo: "Open Day — Corsi magistrali in Informatica e Data Science",
    categoria: "Ammissioni",
    data: "20 maggio",
    orario: "Ore 09:00 – 13:00",
    aula: "Campus Centrale",
  },
  {
    id: 5,
    titolo: "Hackathon 24h — Sviluppa una web app con ai stack",
    categoria: "Tecnologia",
    data: "27 maggio",
    orario: "Dalle ore 10:00",
    aula: "Polo Tecnologico",
  },
  {
    id: 6,
    titolo: "UX Design: principi fondamentali per interfacce efficaci",
    categoria: "Workshop",
    data: "12 maggio",
    orario: "Ore 10:00 – 13:00",
    aula: "Aula A1, Polo Informatico",
  },
  {
    id: 7,
    titolo: "Intelligenza Artificiale: opportunità e sfide nel 2026",
    categoria: "Tecnologia",
    data: "20 maggio",
    orario: "Ore 16:00 – 18:30",
    aula: "Aula Magna, Polo Informatico",
  },
];
const articoli = [
  {
    id: 1,
    titolo: "Perché React continua a dominare il frontend nel 2025",
    categoria: "Tecnologia",
    desc: "Un analisi dello stack tecnologico adottato dalle principali aziende tech italiane: React, Next.js e TypeScript rimangono le competenzepiù richieste dai recruiter.",
    autore: "Redazione Ateneo",
    data: "02 maggio 2025",
  },
  {
    id: 2,
    titolo: "Guida ai workshop di maggio: cosa portare e come prepararsi",
    categoria: "workshop",
    desc: "Dal laptop con Node.js installato alla gestione dei prerequisiti: tutto quello che devi sapere prima di partecipare agli eventipratici del mese",
    autore: "Ufficio Didattica",
    data: "28 apr 2025",
  },
  {
    id: 3,
    titolo:
      "Node.js 22 e le novità di ES2025 — cosa cambia per gli sviluppatori",
    categoria: "tecnologia",
    desc: "Le ultime release portano miglioramenti alle performance e nuove API native. Il nostro docente analizza l impatto pratico per chi inizia oggi.",
    autore: "Prof. Marchetti",
    data: "25 apr 2025",
  },
  {
    id: 4,
    titolo: "Bando ammissioni aperto: scadenza 31 maggio per le magistrali",
    categoria: "Ammissioni",
    desc: "Sono aperti i bandi per l accesso ai corsi magistrali in IngegneriaInformatica, Data Science e Intelligenza Artificiale. Documentazione sul portale studenti.",
    autore: "Segreteria",
    data: "01 mag 2025",
  },
];

const eventiContenitore = document.querySelector("#eventi");
eventi.forEach((e) => {
  eventiContenitore.innerHTML += `
  <article class="event-card d-flex flex-column border border-3 border-white text-white p-3" data-category="${e.categoria.toLowerCase()}">
    <header class="d-flex flex-row gap-5 mb-3">
        <span>${e.categoria}</span>
        <span>${e.data}</span>
    </header>
    <main>
        <h3 class="text-warning fw-bold">
           ${e.titolo}
        </h3>
        <div class="text-white">
            <span>${e.orario}</span>
            <span>${e.aula}</span>
        </div>
        <button class="btn border border-warning rounded-0 mt-3 fw-bold text-warning" href="#">
            Iscriviti al workshop
        </button>
    </main>
</article>`;
});

const articoliContenitore = document.querySelector("#articoli");
articoli.forEach((a) => {
  articoliContenitore.innerHTML += `
  <article class="article-card d-flex flex-column border border-2 border-warning p-3" data-category="${a.categoria.toLowerCase()}">
    <h3 class="fs-3 text-warning fw-medium">
        ${a.titolo}
    </h3>
    <p class="text-white">
       ${a.desc}
    </p>
    <div class="text-white">
        <span>${a.autore}</span>
        <span>${a.data}</span>
        <a class="text-danger text-decoration-none" href="#">Leggi →</a>
    </div>
</article>`;
});

function filtraCategorie(categoria) {
  const items = document.querySelectorAll(".event-card, .article-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-filter") === categoria) {
      btn.classList.add("active");
    }
  });

  const activeBtn = document.querySelector(`[data-filter="${categoria}"]`);
  if (activeBtn) activeBtn.classList.add("active");

  items.forEach((item) => {
    const itemCategory = item.dataset.category;

    if (categoria === "tutti" || itemCategory === categoria.toLowerCase()) {
      item.classList.remove("d-none");
      item.classList.add("d-blok");
    } else {
      item.classList.remove("d-blok");
      item.classList.add("d-none");
    }
  });
}
