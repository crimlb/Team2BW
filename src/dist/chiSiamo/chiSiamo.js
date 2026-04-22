// DATI
const campus = {
    '1': 'Roma',
    '2': 'Milano',
    '3': 'Napoli'
};

const corsi = {
    '1': 'Full Stack Web Development',
    '2': 'Java SpringBoot Backend',
    '3': 'Mobile App Developer',
    '4': 'AI & Machine Learning',
    '5': 'Data Analyst',
    '6': 'Cybersecurity'
};

const desc_corsi = [
    { campus: 1, corso: 1, desc: 'Corso completo full stack: frontend e backend, sviluppo applicazioni web moderne, gestione database e API. Approccio pratico con progetti reali fin da subito.', prof: '1', data: '5 Mag' },
    { campus: 1, corso: 2, desc: 'Backend con Java SpringBoot: sviluppo API, gestione database, sicurezza e architetture scalabili. Ideale per chi vuole lavorare lato server.', prof: '1', data: '8 Mag' },
    { campus: 1, corso: 3, desc: 'Sviluppo app mobile: creazione applicazioni Android/iOS, interfacce intuitive e integrazione API. Focus su esperienza utente e performance.', prof: '2', data: '12 Mag' },
    { campus: 1, corso: 4, desc: 'Introduzione a AI e Machine Learning: modelli base, analisi dati e applicazioni pratiche. Ideale per iniziare nel mondo dell’intelligenza artificiale.', prof: '2', data: '18 Mag' },
    { campus: 1, corso: 5, desc: 'Data Analyst: raccolta, analisi e visualizzazione dati. Uso strumenti moderni per prendere decisioni basate su dati reali.', prof: '3', data: '25 Mag' },
    { campus: 1, corso: 6, desc: 'Cybersecurity: sicurezza informatica, protezione sistemi e reti. Analisi vulnerabilità e difesa da attacchi informatici.', prof: '3', data: '30 Mag' },
    { campus: 2, corso: 1, desc: 'Full stack avanzato con focus su performance e scalabilità. Progetti reali e strumenti professionali utilizzati nel mondo del lavoro.', prof: '4', data: '7 Giu' },
    { campus: 2, corso: 2, desc: 'Java SpringBoot per backend enterprise. Sviluppo API robuste, gestione sicurezza e architetture complesse.', prof: '4', data: '12 Giu' },
    { campus: 2, corso: 3, desc: 'Mobile development moderno: sviluppo cross-platform, UI avanzate e integrazione servizi esterni.', prof: '5', data: '20 Mag' },
    { campus: 2, corso: 4, desc: 'AI e Machine Learning con casi reali. Analisi predittiva e utilizzo di modelli su dataset concreti.', prof: '5', data: '1 Giu' },
    { campus: 2, corso: 5, desc: 'Data Analyst avanzato: gestione grandi dataset, visualizzazione e interpretazione dati per business decision.', prof: '6', data: '22 Mag' },
    { campus: 2, corso: 6, desc: 'Cybersecurity pratica: test di sicurezza, protezione sistemi e prevenzione attacchi reali.', prof: '6', data: '4 Lug' },
    { campus: 3, corso: 1, desc: 'Full stack base: sviluppo siti e applicazioni web complete, dalle interfacce al backend.', prof: '1', data: '19 Giu' },
    { campus: 3, corso: 2, desc: 'Backend Java SpringBoot: creazione API e gestione dati per applicazioni web moderne.', prof: '1', data: '17 Mag' },
    { campus: 3, corso: 3, desc: 'Sviluppo mobile base: creazione app semplici, interfacce intuitive e funzionalità principali.', prof: '2', data: '29 Apr' },
    { campus: 3, corso: 4, desc: 'Introduzione a AI: basi machine learning e applicazioni pratiche semplici.', prof: '2', data: '11 Giu' },
    { campus: 3, corso: 5, desc: 'Data Analyst base: raccolta e analisi dati con strumenti essenziali.', prof: '3', data: '10 Mag' },
    { campus: 3, corso: 6, desc: 'Cybersecurity base: concetti fondamentali di sicurezza informatica e protezione sistemi.', prof: '3', data: '15 Giu' }
];

const profs = [
    { id: 1, nome: 'Giulia Ferri', materia: 'Insegnante di Programmazione Base', motto: 'Capire la logica è più importante che memorizzare il codice.' },
    { id: 2, nome: 'Luca Bianchi', materia: 'Insegnante di Javascript', motto: 'Il codice pulito è il primo passo verso soluzioni scalabili e durature.' },
    { id: 3, nome: 'Marco Conti', materia: 'Insegnante di Python', motto: 'Ogni errore è un debug in meno tra te e la soluzione.' },
    { id: 4, nome: 'Sara Leone', materia: 'Insegnante di Frontend Development', motto: 'Il design guida l’utente, il codice lo rende possibile.' },
    { id: 5, nome: 'Andrea Russo', materia: 'Insegnante di Node.js', motto: 'Backend solido, applicazione stabile. Sempre.' }


];

// template

/*                 <div class="carousel-item active">
                  <img
                    src="../../assets/img/prof_square_1.png"
                    class="m-auto mb-5 d-block w-50 rounded-circle"
                    alt="..."
                  />
                  <div class="carousel-caption position-relative start-0">
                    <h5
                      class="m-auto display fs-6 fw-bold col-8 text-light mb-3"
                    >
                      "Capire la logica è più importante che memorizzare il
                      codice."
                    </h5>
                    <p class="m-auto text-dark-gray">Giulia Ferri</p>
                    <p class="m-auto text-dark-gray">
                      Insegnante di Programmazione Base
                    </p>
                  </div>
                </div> */

const carosello = document.getElementById('caroselloProfs')


profs.forEach( p => {

  // const sliderProf = document.createElement('div')
  
  if (p = profs[0]) {

    carosello.innerHTML =
      `<div class="carousel-item active">
            <img src="../../assets/img/prof_square_${p.id}.png" class="m-auto mb-5 d-block w-50 rounded-circle" alt="..." />
            <div class="carousel-caption position-relative start-0">
                <h5 class="m-auto display fs-6 fw-bold col-8 text-light mb-3">${p.motto}</h5>
                <p class="m-auto text-dark-gray">${p.nome}</p>
                <p class="m-auto text-dark-gray">${p.materia}</p>
            </div>
        </div>`
  } else if (p != profs[0]){

      carosello.innerHTML =
      `<div class="carousel-item">
            <img src="../../assets/img/prof_square_${p.id}.png" class="m-auto mb-5 d-block w-50 rounded-circle" alt="..." />
            <div class="carousel-caption position-relative start-0">
                <h5 class="m-auto display fs-6 fw-bold col-8 text-light mb-3">${p.motto}</h5>
                <p class="m-auto text-dark-gray">${p.nome}</p>
                <p class="m-auto text-dark-gray">${p.materia}</p>
            </div>
        </div>`
  }
  
  // carosello.appendChild(sliderProf)



})