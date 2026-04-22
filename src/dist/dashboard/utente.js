function salvaUtente(u) {
  localStorage.setItem('pu_utente', JSON.stringify(u));
}

function getUtente() {
  const raw = localStorage.getItem('pu_utente');
  return raw ? JSON.parse(raw) : null;
}

function aggiornaUtente(campo, valore) {
  const u = getUtente();
  if (!u) return;
  u[campo] = valore;
  salvaUtente(u);
}

function cancellaUtente() {
  localStorage.removeItem('pu_utente');
  localStorage.removeItem('pu_prenotazioni');
}

function verificaLogin(username, password) {
  const u = getUtente();
  return u && u.username === username.trim() && u.password === password;
}

function creaUtente(username, nome, cognome, email, password, corso) {
  const corsi = {
    '1': 'Full Stack Web Developer',
    '2': 'Java SpringBoot Backend',
    '3': 'Mobile App Developer',
    '4': 'AI & Machine Learning',
    '5': 'Data Analyst',
    '6': 'Cybersecurity'
  };
  return {
    matricola: 'PU-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000),
    username, nome, cognome, email, password,
    corsoCodice: corso || '1',
    corsoNome: corsi[corso] || 'Non specificato',
    dataNascita: '', telefono: '', indirizzo: '', fotoProfilo: null,
    iscrittoIl: new Date().toLocaleDateString('it-IT'),
    annoCorso: 1, statoIscrizione: 'Attiva'
  };
}

function salvaPrenotazioni(lista) {
  localStorage.setItem('pu_prenotazioni', JSON.stringify(lista));
}

function getPrenotazioni() {
  const raw = localStorage.getItem('pu_prenotazioni');
  return raw ? JSON.parse(raw) : [];
}