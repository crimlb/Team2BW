document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('btn-registrati')?.addEventListener('click', () => {
    const username = document.getElementById('reg-username')?.value.trim();
    const nome     = document.getElementById('reg-nome')?.value.trim();
    const cognome  = document.getElementById('reg-cognome')?.value.trim();
    const email    = document.getElementById('reg-email')?.value.trim();
    const password = document.getElementById('reg-password')?.value;
    const corso    = document.getElementById('reg-corso')?.value;
    const termini  = document.getElementById('reg-check-termini')?.checked;
    const privacy  = document.getElementById('reg-check-privacy')?.checked;
    const errEl    = document.getElementById('reg-error');

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
    const errEl    = document.getElementById('login-error');

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