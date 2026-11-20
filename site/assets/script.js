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
    menu?.setAttribute('aria-expanded', 'false'); nav.classList.remove('open');
  }));
  document.getElementById('year')?.replaceChildren(String(new Date().getFullYear()));
  const form = document.getElementById('contactForm');
  if (!form) return;
  const staticMode = location.hostname.endsWith('github.io') || location.protocol === 'file:';
  const button = form.querySelector('button[type=submit]');
  const note = form.querySelector('#formMode');
  const status = form.querySelector('.form-status');
  if (!staticMode) {
    button.firstChild.textContent = 'Send enquiry ';
    note.textContent = 'This form saves your enquiry to a private, first-party owner inbox on this website. It is not an emergency channel; call for urgent service.';
  }
  const copy = document.createElement('button');
  copy.type = 'button'; copy.className = 'copy-enquiry';
  copy.textContent = 'Copy enquiry text';
  copy.style.cssText = 'align-self:start;background:none;border:0;color:#ffe0af;text-decoration:underline;cursor:pointer;padding:3px 0;font-size:12px';
  if (staticMode) button.insertAdjacentElement('afterend', copy);
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
    if (staticMode) {
      const body = encodeURIComponent(message(data));
      status.textContent = 'Opening your messaging app. This page has not sent your enquiry; press Send in the messaging app. If it does not open, use Copy enquiry text or call.';
      location.href = `sms:+16143639941?body=${body}`;
      return;
    }
    button.disabled = true; status.textContent = 'Sending…';
    try {
      const response = await fetch(form.action, {method:'POST', body:data, headers:{'Accept':'application/json'}});
      const result = await response.json();
      if (!response.ok || !result.ok) throw Error(result.error || 'Unable to send.');
      status.textContent = 'Thanks. Your enquiry is saved for the team. For urgent help, call (614) 363-9941.';
      form.reset();
    } catch (error) {
      status.textContent = `${error.message} Please call (614) 363-9941 instead.`;
    } finally { button.disabled = false; }
  });
})();
