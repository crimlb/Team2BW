document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('btn-registrati')?.addEventListener('click', () => {
    const username = document.getElementById('reg-username')?.value.trim();
    const nome = document.getElementById('reg-nome')?.value.trim();
    const cognome = document.getElementById('reg-cognome')?.value.trim();
    const email = document.getElementById('reg-email')?.value.trim();
    const password = document.getElementById('reg-password')?.value;
    const corso = document.getElementById('reg-corso')?.value;
    const termini = document.getElementById('reg-check-termini')?.checked;
    const privacy = document.getElementById('reg-check-privacy')?.checked;
    const errEl = document.getElementById('reg-error');

    if (!username || !nome || !cognome || !email || !password || !termini || !privacy) {
      errEl?.classList.remove('d-none');
      return;
    }

    errEl?.classList.add('d-none');
    salvaUtente(creaUtente(username, nome, cognome, email, password, corso));

    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModalScrollable'))
      ?? new bootstrap.Modal(document.getElementById('exampleModalScrollable'));
    modal.hide();
    setTimeout(() => { window.location.href = './dashboard/dashboard.html'; }, 350);
  });

  document.getElementById('btn-login-accedi')?.addEventListener('click', () => {
    const username = document.getElementById('login-username')?.value.trim();
    const password = document.getElementById('login-password')?.value;
    const errEl = document.getElementById('login-error');

    if (verificaLogin(username, password)) {
      errEl?.classList.add('d-none');
      const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModalCenter'))
        ?? new bootstrap.Modal(document.getElementById('exampleModalCenter'));
      modal.hide();
      setTimeout(() => { window.location.href = './dashboard/dashboard.html'; }, 350);
    } else {
      errEl?.classList.remove('d-none');
    }
  });

  ['login-username', 'login-password'].forEach(id => {
    document.getElementById(id)?.addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('btn-login-accedi')?.click();
    });
  });

});

const imgCarosello = [
  "carosello1.webp",
  "carosello2.webp",
  "carosello3.webp",
  "carosello4.webp",
  "carosello5.webp",
  "carosello6.webp",
  "carosello7.webp"
]

function primoCarosello() {
  const classCard = "slider-card"
  const classContFluid = "container-fluid"


  let carosello = document.getElementById("idCarosello");
  carosello.classList.add("slider-main");
  let sliderHTML = `<div class="${classCard} ${classContFluid}">`;

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < imgCarosello.length; j++) {
      sliderHTML += `
      <img src="../assets/img/${imgCarosello[j]}" 
           alt="immagineCarosello"
           class="d-block sliderCardDimensione border border-1 border-warning" />
    `;
    }
  }

  sliderHTML += `</div>`;

  carosello.innerHTML = `${sliderHTML}`
}

function cards() {
  const immagini = [
    "https://boommanagement.nl/wp-content/uploads/2025/01/workshop-2.jpg",
    "https://www.acaweb.it/wp-content/uploads/2022/04/Formazione.jpg",
    "https://media.istockphoto.com/id/1366724877/it/foto/vista-posteriore-dellinsegnante-maturo-che-parla-con-il-suo-studente-durante-la-lezione-in.jpg?s=612x612&w=0&k=20&c=4y3xDJYS3-d3jZLrQTH0e-HschQW9Tc4KNF3n4_5kbM="
  ]

  const linkNav = [
    "../dist/news/news.html",
    "./iNostriCorsi/iNostriCorsi.html",
    "./chiSiamo/chiSiamo.html#professori"
  ]
  const titoli = [
    "Prossimi Eventi",
    "Percorsi Formativi",
    "Mentor & Docenti"
  ]

  const testi = [
    "Workshop, open day e incontri con mentor per iniziare la tua carriera nel tech.",
    "Programmi intensivi per diventare developer in pochi mesi",
    "Docenti attivi nel settore tech e supporto continuo"
  ]

  const classContainer = "container"

  let divContainerCard = document.getElementById("idContainerCard")
  divContainerCard.classList.add(classContainer)

  let cardHtml = `<div class="row justify-content-center g-4">
        <section class="py-5 bg-dark">
          <div class="${classContainer} contenitore">
            <div class="row text-center g-4 justify-content-center">`

  for (let i = 0; i < immagini.length; i++) {
    cardHtml += `<div class="col-12 col-md-6 col-lg-4"><div
                  class="p-3 p-lg-5 bg-secondary shadow-sm card-hover text-center 
                  border border-grigio border-3 h-100 d-flex flex-column">
                  <img src="${immagini[i]}" class="img-fluid shadow-sm mb-3 border border-warning border-1"/>
                  <div class="flex-grow-1 d-flex flex-column justify-content-start">
                    <h4 class="text-light mb-2 fw-bold min-h-title">${titoli[i]}</h4>
                    <p class="text-light opacity-75 mb-3 min-h-text">${testi[i]}</p>
                  </div><a href="${linkNav[i]}" class="fw-bold btn btn-warning btn-lg px-4 btn-press border border-dark rounded-0">Scopri</a></div></div>`
              }
              cardHtml += `</div></div></section></div>`
              divContainerCard.innerHTML=cardHtml
}


primoCarosello() 
cards()
