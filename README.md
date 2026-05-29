# Programmers' University

Questo repository contiene il codice sorgente del sito web “Programmers' University”, un progetto di gruppo realizzato come piattaforma online fittizia per l’educazione alla programmazione. Il progetto mostra diverse tecniche di sviluppo front-end, tra cui design responsive, autenticazione utenti e una dashboard dinamica per studenti.

# Funzionalità
Sito multi-pagina responsive: include Homepage, Chi Siamo, Corsi e News, tutte progettate per essere completamente responsive.
Autenticazione utenti: un sistema completo di registrazione e login tramite modali. I dati degli utenti vengono salvati nel local storage del browser.
Dashboard studenti: un’area riservata e personalizzata per gli studenti registrati con le seguenti sezioni:
Profilo: visualizzazione e modifica delle informazioni personali, inclusa la foto profilo.
I miei corsi: monitoraggio del percorso accademico, visualizzazione dei piani di studio, CFU completati e media voti.
Segreteria: download di documenti ufficiali e invio di richieste amministrative.
Materiali: accesso a materiali didattici digitali come videolezioni, slide e repository di codice.
Prenotazione esami: visualizzazione degli appelli disponibili e prenotazione degli esami.
Contenuti dinamici: JavaScript viene utilizzato per generare dinamicamente contenuti come articoli di news, eventi, dettagli dei corsi e caroselli.
Componenti interattivi: il sito utilizza componenti UI moderni come caroselli, accordion e modali per un’esperienza utente più coinvolgente.
Validazione form: validazione lato client per il form di contatto e la newsletter per garantire l’integrità dei dati.

# Stack tecnologico
HTML5
Sass (SCSS)
Bootstrap 5
JavaScript (ES6+)

# Struttura del progetto
src/
├── assets/           
├── dist/             
│   ├── css/          
│   ├── chiSiamo/     
│   ├── dashboard/    
│   ├── iNostriCorsi/ 
│   ├── news/         
│   ├── index.html    
│   └── script.js     
└── scss/             
    └── style.scss    

# Installazione e utilizzo
Clona il repository
git clone https://github.com/crimlb/Team2BW.git
cd Team2BW
Installa dipendenze
npm install
Compila SCSS
npm run build-css

oppure in modalità watch:

npm run watch-css
Avvia il progetto
Apri:
src/dist/index.html

# Screenshots


![Homepage](screenshots/homepage.png)
![Dashboard](screenshots/dashboard.png)
![Login Modal](screenshots/login.png)


# Autorizzazione e Licenza
Questo progetto è stato realizzato a scopo didattico e di portfolio come progetto di gruppo.
Non è destinato ad uso commerciale.

Il codice può essere consultato liberamente, ma non è autorizzata la distribuzione o il riutilizzo completo senza esplicito consenso degli autori del progetto.
