// DATI
const campus = [
  {
    id: 1,
    nome: "Roma",
    indirizzo: "Roma — Via delle Tecnologie Digitali 42, 00144 Roma (RM)",
  },
  {
    id: 2,
    nome: "Milano",
    indirizzo: "Milano — Viale Innovazione 85, 20126 Milano (MI)",
  },
  {
    id: 3,
    nome: "Napoli",
    indirizzo: "Napoli — Via del Polo Tecnologico 17, 80143 Napoli (NA)",
  },
];

const corsi = {
  1: "Full Stack Web Development",
  2: "Java SpringBoot Backend",
  3: "Mobile App Developer",
  4: "AI & Machine Learning",
  5: "Data Analyst",
  6: "Cybersecurity",
};

const desc_corsi = [
  {
    campus: 1,
    corso: 1,
    desc: "Corso completo full stack: frontend e backend, sviluppo applicazioni web moderne, gestione database e API. Approccio pratico con progetti reali fin da subito.",
    prof: 1,
    data: "5 Mag",
  },
  {
    campus: 1,
    corso: 2,
    desc: "Backend con Java SpringBoot: sviluppo API, gestione database, sicurezza e architetture scalabili. Ideale per chi vuole lavorare lato server.",
    prof: 1,
    data: "8 Mag",
  },
  {
    campus: 1,
    corso: 3,
    desc: "Sviluppo app mobile: creazione applicazioni Android/iOS, interfacce intuitive e integrazione API. Focus su esperienza utente e performance.",
    prof: 2,
    data: "12 Mag",
  },
  {
    campus: 1,
    corso: 4,
    desc: "Introduzione a AI e Machine Learning: modelli base, analisi dati e applicazioni pratiche. Ideale per iniziare nel mondo dell’intelligenza artificiale.",
    prof: 2,
    data: "18 Mag",
  },
  {
    campus: 1,
    corso: 5,
    desc: "Data Analyst: raccolta, analisi e visualizzazione dati. Uso strumenti moderni per prendere decisioni basate su dati reali.",
    prof: 3,
    data: "25 Mag",
  },
  {
    campus: 1,
    corso: 6,
    desc: "Cybersecurity: sicurezza informatica, protezione sistemi e reti. Analisi vulnerabilità e difesa da attacchi informatici.",
    prof: 3,
    data: "30 Mag",
  },
  {
    campus: 2,
    corso: 1,
    desc: "Full stack avanzato con focus su performance e scalabilità. Progetti reali e strumenti professionali utilizzati nel mondo del lavoro.",
    prof: 4,
    data: "7 Giu",
  },
  {
    campus: 2,
    corso: 2,
    desc: "Java SpringBoot per backend enterprise. Sviluppo API robuste, gestione sicurezza e architetture complesse.",
    prof: 4,
    data: "12 Giu",
  },
  {
    campus: 2,
    corso: 3,
    desc: "Mobile development moderno: sviluppo cross-platform, UI avanzate e integrazione servizi esterni.",
    prof: 5,
    data: "20 Mag",
  },
  {
    campus: 2,
    corso: 4,
    desc: "AI e Machine Learning con casi reali. Analisi predittiva e utilizzo di modelli su dataset concreti.",
    prof: 5,
    data: "1 Giu",
  },
  {
    campus: 2,
    corso: 5,
    desc: "Data Analyst avanzato: gestione grandi dataset, visualizzazione e interpretazione dati per business decision.",
    prof: 6,
    data: "22 Mag",
  },
  {
    campus: 2,
    corso: 6,
    desc: "Cybersecurity pratica: test di sicurezza, protezione sistemi e prevenzione attacchi reali.",
    prof: 6,
    data: "4 Lug",
  },
  {
    campus: 3,
    corso: 1,
    desc: "Full stack base: sviluppo siti e applicazioni web complete, dalle interfacce al backend.",
    prof: 1,
    data: "19 Giu",
  },
  {
    campus: 3,
    corso: 2,
    desc: "Backend Java SpringBoot: creazione API e gestione dati per applicazioni web moderne.",
    prof: 1,
    data: "17 Mag",
  },
  {
    campus: 3,
    corso: 3,
    desc: "Sviluppo mobile base: creazione app semplici, interfacce intuitive e funzionalità principali.",
    prof: 2,
    data: "29 Apr",
  },
  {
    campus: 3,
    corso: 4,
    desc: "Introduzione a AI: basi machine learning e applicazioni pratiche semplici.",
    prof: 2,
    data: "11 Giu",
  },
  {
    campus: 3,
    corso: 5,
    desc: "Data Analyst base: raccolta e analisi dati con strumenti essenziali.",
    prof: 3,
    data: "10 Mag",
  },
  {
    campus: 3,
    corso: 6,
    desc: "Cybersecurity base: concetti fondamentali di sicurezza informatica e protezione sistemi.",
    prof: 3,
    data: "15 Giu",
  },
];

const profs = [
  {
    id: 1,
    nome: "Simone Iengo",
    materia: "Insegnante di Full-Stack Development",
    motto: "Minimo sforzo, massima resa",
  },
  {
    id: 2,
    nome: "Giulia Ferri",
    materia: "Insegnante di Programmazione Base",
    motto: "Capire la logica è più importante che memorizzare il codice.",
  },
  {
    id: 3,
    nome: "Luca Bianchi",
    materia: "Insegnante di Javascript",
    motto:
      "Il codice pulito è il primo passo verso soluzioni scalabili e durature.",
  },
  {
    id: 4,
    nome: "Marco Conti",
    materia: "Insegnante di Python",
    motto: "Ogni errore è un debug in meno tra te e la soluzione.",
  },
  {
    id: 5,
    nome: "Sara Leone",
    materia: "Insegnante di Frontend Development",
    motto: "Il design guida l’utente, il codice lo rende possibile.",
  },
  {
    id: 6,
    nome: "Andrea Russo",
    materia: "Insegnante di Node.js",
    motto: "Backend solido, applicazione stabile. Sempre.",
  },
];

// creazione card Campus
const cardsContainer = document.querySelector("#cardsContainer");

campus.forEach((c) => {
  const vociAccordion = desc_corsi.filter((vc) => vc.campus == c.id);

  cardsContainer.innerHTML += `<section class="card-campus border-grigio border border-3 bg-secondary col-md-4 col-lg-3 id="campus${c.nome}">
              <header class="border border-0 mt-3">
                <h3 class="text-center text-warning fw-semibold display-6">
                Campus<br />${c.nome}
                </h3>
              </header>
              <main class="p-3 text-center">
                <img class="img-fluid mb-3" src="../../assets/img/campus_${c.nome}.png" alt=""/>
                <span class="text-white text-center">${c.indirizzo}</span>
              </main>
              <footer class="p-3 border-box">
                <div class="accordion" id="accordion${c.nome}">

                </div>
              </footer>
            </section>`;

  const accordionCampus = document.getElementById(`accordion${c.nome}`);

  vociAccordion.forEach((vc) => {
    const collapseId = `collapse-${c.id}-${vc.corso}`;
    const prof = profs.find((p) => p.id === vc.prof);

    accordionCampus.innerHTML += `                  <div class="accordion-item rounded-0 campus-accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed bg-dark text-warning rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="true" aria-controls="${collapseId}">${corsi[vc.corso]}</button>
                    </h2>
                    <div id="${collapseId}" class="accordion-collapse collapse" data-bs-parent="#accordion${c.nome}">
                      <div class="accordion-body d-flex flex-column justify-content-center bg-grigioChiaro">
                        <p class="my-2">
                          ${vc.desc}
                          <br><br>
                          Il corso verrà tenuto dal prof:<br><br>
                          <h3 class="fw-bold text-dark m-auto">${prof.nome}</h3><br><br>
                          Corso in partenza il <span class="text-warning fw-bold bg-dark p-2 m-auto mt-3">${vc.data}</span>
                        </p>
                        <button type="button" class="btn btn-dark text-warning mx-auto mt-5 mb-3">
                          Vai alla pagina del Corso
                        </button>
                      </div>
                    </div>
                  </div>`;
  });
});

// carosello professori
const carosello = document.getElementById("caroselloProfs");

profs.forEach((p) => {
  carosello.innerHTML += `<div class="carousel-item" id="slideProf">
            <img src="../../assets/img/prof_square_${p.id}.png" class="m-auto mb-5 d-block w-50 rounded-circle" alt="..." />
            <div class="carousel-caption position-relative start-0">
                <h5 class="m-auto display fs-6 fw-bold col-8 text-light mb-3">${p.motto}</h5>
                <p class="m-auto text-dark-gray">${p.nome}</p>
                <p class="m-auto text-dark-gray">${p.materia}</p>
            </div>
        </div>`;

  if (p.id === 1) {
    const profActive = document.getElementById("slideProf");
    profActive.classList.add("active");
  }
});

// validazione form contatti

const form = document.querySelector("#contatti");
const errBoxNome = document.querySelector("#errBoxNome");
const errBoxCognome = document.querySelector("#errBoxCognome");
const errBoxEmail = document.querySelector("#errBoxEmail");
const errBoxSelect = document.querySelector("#errBoxSelect");
const errBoxMsg = document.querySelector("#errBoxMsg");
const msgBox = document.querySelector("#msgBox");

function validaNome(nome) {
  if (!nome) {
    return "Il nome è obbligatorio";
  }
  if (nome.length < 2) {
    return "Hai un nome troppo corto!";
  }
  if (nome.length > 50) {
    return "Il tuo nome è troppo lungo!";
  }
  return null;
}

function validaCognome(cognome) {
  if (!cognome) {
    return "Il cognome è obbligatorio";
  }
  if (cognome.length < 2) {
    return "Hai un cognome troppo corto!";
  }
  if (cognome.length > 50) {
    return "Il tuo cognome è troppo lungo!";
  }
  return null;
}

function validaEmail(email) {
  if (!email) {
    return "L'email è obbligatoria";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return "Questa email non ha un formato valido!";
  }
  return null;
}

function validaMsg(msg) {
  if (!msg) {
    return "Non hai inserito nessun messaggio nella richiesta!";
  }
  if (msg.length < 2) {
    return "Mandi solo una lettera? Questa si chiama spam!";
  }
  if (msg.length > 500) {
    return "Se ti piace scrivere poemi non offriamo corsi del genere! Messaggio troppo lungo!";
  }
  return null;
}

function validaSelezione(select) {
  if (select === "default") {
    return "Seleziona il motivo della richiesta di contatto";
  }
  return null;
}

function mostraErrori(dati) {
  const errori = [];

  const errNome = validaNome(dati.nome);
  if (errNome) {
    errBoxNome.innerHTML = `<span class="justify-content-center text-danger d-flex flex-fill border border-2 border-danger fw-bold p-3">${errNome}</span>`;
    errori.push(errNome);
  }

  const errCognome = validaCognome(dati.cognome);
  if (errCognome) {
    errBoxCognome.innerHTML = `<span class="justify-content-center text-danger d-flex flex-fill border border-2 border-danger fw-bold p-3">${errCognome}</span>`;
    errori.push(errCognome);
  }

  const errEmail = validaEmail(dati.email);
  if (errEmail) {
    errBoxEmail.innerHTML = `<span class="justify-content-center text-danger d-flex flex-fill border border-2 border-danger fw-bold p-3">${errEmail}</span>`;
    errori.push(errEmail);
  }

  const errSelect = validaSelezione(dati.select);
  if (errSelect) {
    errBoxSelect.innerHTML = `<span class="justify-content-center text-danger d-flex flex-fill border border-2 border-danger fw-bold p-3">${errSelect}</span>`;
    errori.push(errSelect);
  }

  const errMsg = validaMsg(dati.msg);
  if (errMsg) {
    errBoxMsg.innerHTML = `<span class="justify-content-center text-danger d-flex flex-fill border border-2 border-danger fw-bold p-3">${errMsg}</span>`;
    errori.push(errMsg);
  }

  return errori;
}

function msgOk() {
  msgBox.innerHTML = `
    <span class="text-success d-flex text-center justify-content-center border border-2 border-success fw-bold p-3">
      Messaggio inviato correttamente!
    </span>
  `;
}

function pulisciErrBox() {
  errBoxNome.innerHTML = "";
  errBoxCognome.innerHTML = "";
  errBoxEmail.innerHTML = "";
  errBoxSelect.innerHTML = "";
  errBoxMsg.innerHTML = "";
}

function pulisciMsgOk() {
  msgBox.innerHTML = "";
}

//Event listener bottoni
form.addEventListener("reset", () => {
  pulisciErrBox();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  pulisciErrBox();
  pulisciMsgOk();

  const dati = {
    nome: form.querySelector("#contatti-nome").value.trim(),
    cognome: form.querySelector("#contatti-cognome").value.trim(),
    email: form.querySelector("#contatti-email").value.trim().toLowerCase(),
    select: form.querySelector("#contatti-select").value,
    msg: form.querySelector("#contatti-msg").value,
  };

  const errori = mostraErrori(dati);

  if (errori.length > 0) {
    return;
  }

  msgOk();
  form.reset();
});
