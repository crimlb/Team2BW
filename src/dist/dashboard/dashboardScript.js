document.addEventListener("DOMContentLoaded", () => {
  const utente = getUtente();
  if (!utente) {
    window.location.href = "../index.html";
    return;
  }

  function setTxt(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val || "—";
  }

  function mostraToast(msg) {
    const toast = document.getElementById("db-toast");
    if (!toast) return;
    toast.querySelector(".db-toast-msg").textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  }

  function aggiornaAvatar(el, u) {
    if (!el) return;
    if (u?.fotoProfilo) {
      el.innerHTML = `<img src="${u.fotoProfilo}" alt="avatar">`;
    } else {
      el.textContent =
        ((u?.nome?.[0] ?? "") + (u?.cognome?.[0] ?? "")).toUpperCase() || "PU";
    }
  }

  const sidebarAvatar = document.getElementById("sidebar-avatar");
  document.getElementById("sidebar-nome").textContent =
    `${utente.nome} ${utente.cognome}`;
  document.getElementById("sidebar-matricola").textContent = utente.matricola;
  aggiornaAvatar(sidebarAvatar, utente);

  const navLinks = document.querySelectorAll(".db-nav-link[data-section]");
  const sections = document.querySelectorAll(".db-section");

  function attivaSezione(id) {
    sections.forEach((s) => s.classList.remove("active"));
    navLinks.forEach((l) => l.classList.remove("active"));
    document.getElementById(id)?.classList.add("active");
    document
      .querySelector(`.db-nav-link[data-section="${id}"]`)
      ?.classList.add("active");
  }

  navLinks.forEach((link) =>
    link.addEventListener("click", () => attivaSezione(link.dataset.section)),
  );
  attivaSezione("sec-profilo");

  function caricaProfilo(u) {
    setTxt("prof-nome", u.nome);
    setTxt("prof-cognome", u.cognome);
    setTxt("prof-nome-card", u.nome);
    setTxt("prof-cognome-card", u.cognome);
    setTxt("prof-username", u.username);
    setTxt("prof-email", u.email);
    setTxt("prof-matricola", u.matricola);
    setTxt("prof-matricola-card", u.matricola);
    setTxt("prof-corso", u.corsoNome);
    setTxt("prof-iscritto", u.iscrittoIl);
    setTxt("prof-stato", u.statoIscrizione);
    setTxt("prof-anno", `${u.annoCorso}° anno`);
    setTxt("prof-datanascita", u.dataNascita);
    setTxt("prof-telefono", u.telefono);
    setTxt("prof-indirizzo", u.indirizzo);
    aggiornaAvatar(document.getElementById("prof-avatar-grande"), u);
  }

  caricaProfilo(utente);

  document
    .getElementById("btn-salva-profilo")
    ?.addEventListener("click", () => {
      aggiornaUtente(
        "dataNascita",
        document.getElementById("input-datanascita").value,
      );
      aggiornaUtente(
        "telefono",
        document.getElementById("input-telefono").value,
      );
      aggiornaUtente(
        "indirizzo",
        document.getElementById("input-indirizzo").value,
      );
      caricaProfilo(getUtente());
      mostraToast("Profilo aggiornato!");
    });

  const fotoInput = document.getElementById("fotoInput");
  document
    .getElementById("btn-foto-edit")
    ?.addEventListener("click", () => fotoInput?.click());
  fotoInput?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      aggiornaUtente("fotoProfilo", ev.target.result);
      const u = getUtente();
      aggiornaAvatar(sidebarAvatar, u);
      aggiornaAvatar(document.getElementById("prof-avatar-grande"), u);
      mostraToast("Foto aggiornata!");
    };
    reader.readAsDataURL(file);
  });

  const piani = {
    1: [
      {
        nome: "Introduzione alla Programmazione",
        crediti: 6,
        docente: "Prof. Russo",
        stato: "in-corso",
        voto: null,
      },
      {
        nome: "HTML & CSS Fondamentali",
        crediti: 6,
        docente: "Prof.ssa Bianchi",
        stato: "da-sostenere",
        voto: null,
      },
      {
        nome: "Logica e Algoritmi",
        crediti: 9,
        docente: "Prof. Ferrari",
        stato: "da-sostenere",
        voto: null,
      },
    ],
    2: [
      {
        nome: "HTML5 & CSS3 Avanzato",
        crediti: 6,
        docente: "Prof.ssa Bianchi",
        stato: "superato",
        voto: 28,
      },
      {
        nome: "JavaScript ES6+",
        crediti: 9,
        docente: "Prof. Russo",
        stato: "in-corso",
        voto: null,
      },
      {
        nome: "React & Vue.js",
        crediti: 9,
        docente: "Prof. Gallo",
        stato: "da-sostenere",
        voto: null,
      },
      {
        nome: "Node.js & Express",
        crediti: 9,
        docente: "Prof. Moretti",
        stato: "da-sostenere",
        voto: null,
      },
      {
        nome: "Database SQL & NoSQL",
        crediti: 6,
        docente: "Prof.ssa Costa",
        stato: "da-sostenere",
        voto: null,
      },
    ],
    3: [
      {
        nome: "Swift & iOS Development",
        crediti: 9,
        docente: "Prof. Romano",
        stato: "in-corso",
        voto: null,
      },
      {
        nome: "Kotlin & Android",
        crediti: 9,
        docente: "Prof. Esposito",
        stato: "da-sostenere",
        voto: null,
      },
      {
        nome: "React Native",
        crediti: 9,
        docente: "Prof. Gallo",
        stato: "da-sostenere",
        voto: null,
      },
      {
        nome: "UX/UI per Mobile",
        crediti: 6,
        docente: "Prof.ssa Marino",
        stato: "da-sostenere",
        voto: null,
      },
    ],
    4: [
      {
        nome: "Python per l'AI",
        crediti: 9,
        docente: "Prof. Lombardi",
        stato: "in-corso",
        voto: null,
      },
      {
        nome: "Machine Learning",
        crediti: 12,
        docente: "Prof. Conti",
        stato: "da-sostenere",
        voto: null,
      },
      {
        nome: "Deep Learning & Neural Networks",
        crediti: 12,
        docente: "Prof. Ferri",
        stato: "da-sostenere",
        voto: null,
      },
      {
        nome: "Data Science & Visualization",
        crediti: 9,
        docente: "Prof.ssa Serra",
        stato: "da-sostenere",
        voto: null,
      },
    ],
    5: [
      {
        nome: "Design Patterns",
        crediti: 6,
        docente: "Prof. Russo",
        stato: "superato",
        voto: 30,
      },
      {
        nome: "DevOps & CI/CD",
        crediti: 9,
        docente: "Prof. Mancini",
        stato: "in-corso",
        voto: null,
      },
      {
        nome: "Cloud Architecture (AWS/Azure)",
        crediti: 12,
        docente: "Prof. Vitale",
        stato: "da-sostenere",
        voto: null,
      },
      {
        nome: "Sicurezza Informatica",
        crediti: 9,
        docente: "Prof. Ricci",
        stato: "da-sostenere",
        voto: null,
      },
    ],
    6: [
      {
        nome: "Introduzione alla Programmazione",
        crediti: 6,
        docente: "Prof. Russo",
        stato: "in-corso",
        voto: null,
      },
      {
        nome: "Orientamento Tech Careers",
        crediti: 3,
        docente: "Prof.ssa Verde",
        stato: "da-sostenere",
        voto: null,
      },
    ],
  };

  const icone = {
    superato: "bi-check-circle-fill",
    "in-corso": "bi-play-circle-fill",
    "da-sostenere": "bi-clock",
  };
  const label = {
    superato: "Superato",
    "in-corso": "In corso",
    "da-sostenere": "Da sostenere",
  };
  const esami = piani[utente.corsoCodice] || piani["1"];
  const box = document.getElementById("corsi-container");

  if (box) {
    box.innerHTML = "";
    esami.forEach((e) => {
      const pct =
        e.stato === "superato" ? 100 : e.stato === "in-corso" ? 50 : 0;
      const voto = e.voto
        ? `<span class="badge bg-warning text-dark rounded-0">${e.voto}/30</span>`
        : "";
      const div = document.createElement("div");
      div.className =
        "db-corso-card bg-secondary border border-grigio p-3 mb-3";
      div.innerHTML = `
        <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
          <div>
            <div class="fw-bold text-light mb-1">${e.nome}</div>
            <small class="text-secondary">${e.docente} &bull; ${e.crediti} CFU</small>
          </div>
          <div class="d-flex align-items-center gap-2">
            <span class="db-corso-stato--${e.stato} fw-bold">
              <i class="bi ${icone[e.stato]} me-1"></i>${label[e.stato]}
            </span>${voto}
          </div>
        </div>
        <div class="db-progress"><div class="db-progress__bar" style="width:${pct}%"></div></div>`;
      box.appendChild(div);
    });

    const superati = esami.filter((e) => e.stato === "superato");
    setTxt(
      "cfu-superati",
      superati.reduce((s, e) => s + e.crediti, 0),
    );
    setTxt(
      "cfu-totali",
      esami.reduce((s, e) => s + e.crediti, 0),
    );
    const voti = superati.filter((e) => e.voto).map((e) => e.voto);
    setTxt(
      "media-voti",
      voti.length
        ? (voti.reduce((a, b) => a + b, 0) / voti.length).toFixed(1)
        : "—",
    );
  }

  document.getElementById("sec-segreteria")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".db-doc-btn[data-toast]");
    if (btn && !btn.disabled) mostraToast(btn.dataset.toast);
  });

  document.getElementById("sec-materiali")?.addEventListener("click", (e) => {
    const card = e.target.closest(".db-materiale-card[data-toast]");
    if (card) mostraToast(card.dataset.toast);
  });

  const slots = [
    {
      id: 1,
      esame: "JavaScript ES6+",
      docente: "Prof. Russo",
      data: "15 Maggio 2026",
      ora: "10:00",
      aula: "LAB-3",
    },
    {
      id: 2,
      esame: "HTML5 & CSS3 Avanzato",
      docente: "Prof.ssa Bianchi",
      data: "20 Maggio 2026",
      ora: "14:00",
      aula: "LAB-1",
    },
    {
      id: 3,
      esame: "Database SQL & NoSQL",
      docente: "Prof.ssa Costa",
      data: "22 Maggio 2026",
      ora: "09:00",
      aula: "LAB-2",
    },
    {
      id: 4,
      esame: "React & Vue.js",
      docente: "Prof. Gallo",
      data: "28 Maggio 2026",
      ora: "11:00",
      aula: "LAB-3",
    },
    {
      id: 5,
      esame: "Node.js & Express",
      docente: "Prof. Moretti",
      data: "3 Giugno 2026",
      ora: "15:00",
      aula: "LAB-2",
    },
    {
      id: 6,
      esame: "Python per l'AI",
      docente: "Prof. Lombardi",
      data: "5 Giugno 2026",
      ora: "10:00",
      aula: "LAB-4",
    },
  ];

  const prenotazioni = getPrenotazioni();
  const contenitore = document.getElementById("prenotazioni-container");

  function renderSlots() {
    if (!contenitore) return;
    contenitore.innerHTML = "";
    slots.forEach((slot) => {
      const ok = prenotazioni.includes(slot.id);
      const div = document.createElement("div");
      div.className =
        "db-prenotazione-slot bg-secondary border border-grigio mb-2 p-3 d-flex align-items-center justify-content-between flex-wrap gap-2";
      div.innerHTML = `
        <div>
          <div class="fw-bold text-light small">${slot.esame}</div>
          <div class="text-secondary small mt-1">
            <i class="bi bi-person me-1"></i>${slot.docente} &bull;
            <i class="bi bi-geo-alt me-1"></i>${slot.aula}
          </div>
          <div class="text-warning fw-bold small mt-1">
            <i class="bi bi-calendar3 me-1"></i>${slot.data} &bull; ${slot.ora}
          </div>
        </div>
        <button class="btn-prenota${ok ? " prenotato" : ""}" data-slot-id="${slot.id}" ${ok ? "disabled" : ""}>
          ${ok ? '<i class="bi bi-check-lg me-1"></i>Prenotato' : "Prenota"}
        </button>`;
      contenitore.appendChild(div);
    });
  }

  renderSlots();

  contenitore?.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-prenota:not(.prenotato)");
    if (!btn) return;
    prenotazioni.push(parseInt(btn.dataset.slotId));
    salvaPrenotazioni(prenotazioni);
    renderSlots();
    mostraToast("Esame prenotato!");
  });

  document.getElementById("btn-logout")?.addEventListener("click", () => {
    //    cancellaUtente();
    window.location.href = "../index.html";
  });
});
