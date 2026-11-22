(() => {
  const menu = document.getElementById('menuButton');
  const nav = document.getElementById('mainNav');
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('open', open);
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu?.setAttribute('aria-expanded', 'false'); menu?.setAttribute('aria-label', 'Open menu'); nav.classList.remove('open');
  }));
  document.getElementById('year')?.replaceChildren(String(new Date().getFullYear()));
  const form = document.getElementById('contactForm');
  if (!form) return;
  let serverMode = false;
  const button = form.querySelector('button[type=submit]');
  const note = form.querySelector('#formMode');
  const status = form.querySelector('.form-status');
  const copy = document.createElement('button');
  copy.type = 'button'; copy.className = 'copy-enquiry';
  copy.textContent = 'Copy enquiry text';
  button.insertAdjacentElement('afterend', copy);
  // Static hosts use the SMS draft; only this site's own Node server can enable inbox mode.
  if (location.protocol !== 'file:') fetch('/api/form-status', {headers:{Accept:'application/json'}, cache:'no-store'})
    .then(response => response.ok ? response.json() : null)
    .then(result => {
      if (!result || result.firstParty !== true) return;
      serverMode = true;
      button.firstChild.textContent = 'Send enquiry ';
      note.textContent = 'This form saves your enquiry to a private, first-party owner inbox on this website. It is not an emergency channel; call for urgent service.';
      copy.remove();
    }).catch(() => {});
  function message(data) {
    return `Firefly service request\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nCity/ZIP: ${data.get('location')}\nService: ${data.get('service')}\nDetails: ${data.get('message')}`;
  }
  copy.addEventListener('click', async () => {
    if (!form.reportValidity()) return;
    try { await navigator.clipboard.writeText(message(new FormData(form))); status.textContent = 'Copied. Paste it into a text to (614) 363-9941 and press Send.'; }
    catch { status.textContent = 'Copy was blocked by your browser. You can select and copy the form fields instead.'; }
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (data.get('website')) return;
    if (!serverMode) {
      const body = encodeURIComponent(message(data));
      status.textContent = 'Opening your messaging app. This page has not sent your enquiry; press Send in the messaging app. If it does not open, use Copy enquiry text or call.';
      location.href = `sms:+16143639941?body=${body}`;
      return;
    }
    button.disabled = true; status.textContent = 'Sending…';
    try {
      const response = await fetch(form.action, {method:'POST', body:new URLSearchParams(data), headers:{'Accept':'application/json', 'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}});
      const result = await response.json();
      if (!response.ok || !result.ok) throw Error(result.error || 'Unable to send.');
      status.textContent = 'Thanks. Your enquiry is saved for the team. For urgent help, call (614) 363-9941.';
      form.reset();
    } catch (error) {
      status.textContent = `${error.message} Please call (614) 363-9941 instead.`;
    } finally { button.disabled = false; }
  });
})();
