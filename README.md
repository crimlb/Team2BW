# Link alla Demo: https://team2-bw.vercel.app/

--- 

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

<img width="1518" height="755" alt="homePageDevAccademy1" src="https://github.com/user-attachments/assets/ee186e73-43a1-44e4-8dcb-4332823a64f5" />
<img width="1527" height="761" alt="homePageDevAccademy2" src="https://github.com/user-attachments/assets/c5c230b0-6ac8-4bbe-9055-c9b25c300268" />
<img width="1526" height="757" alt="chiSiamoDevAccademy2" src="https://github.com/user-attachments/assets/d8f91c49-7314-49f8-9a20-5f6eec38a656" />
<img width="1525" height="757" alt="corsiDevAccademy3" src="https://github.com/user-attachments/assets/0d57ba51-c7c2-4e32-a1aa-357f00b2ad3c" />
<img width="1525" height="757" alt="newsDevAccademy4" src="https://github.com/user-attachments/assets/439ed546-045e-4c5a-90ba-0aceda6b93bb" />
<img width="1531" height="756" alt="registrazioneDevAccademy5" src="https://github.com/user-attachments/assets/cceb21b9-2778-4d72-a0e0-068e8c95a866" />
<img width="1526" height="756" alt="loginDevAccademy6" src="https://github.com/user-attachments/assets/db91cbf1-aa0f-4f7d-ad35-8619d27a7754" />
<img width="1896" height="863" alt="dashboardStudente7" src="https://github.com/user-attachments/assets/1dcd7de6-535b-4513-9c1a-c995d520a2da" />



# Autorizzazione e Licenza
Questo progetto è stato realizzato a scopo didattico e di portfolio come progetto di gruppo.
Non è destinato ad uso commerciale.

Il codice può essere consultato liberamente, ma non è autorizzata la distribuzione o il riutilizzo completo senza esplicito consenso degli autori del progetto.
