// Small progressive enhancements for the main page. Everything works without this file:
// the email address is plain text and the closed sections open with a click.
(() => {
  // Copy buttons show only where the Clipboard API is available (https and localhost).
  if (navigator.clipboard && window.isSecureContext) {
    for (const button of document.querySelectorAll('.copy-email')) {
      const status = button.parentElement.querySelector('.copy-status');
      button.hidden = false;
      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(button.dataset.copy);
          if (status) status.textContent = 'Copied';
        } catch {
          if (status) status.textContent = 'Could not copy; select the address instead';
        }
        if (status) setTimeout(() => { status.textContent = ''; }, 2500);
      });
    }
  }

  // Closed sections still print: open them for the print dialog, then close them again.
  let closed = [];
  window.addEventListener('beforeprint', () => {
    closed = [...document.querySelectorAll('details:not([open])')];
    closed.forEach(d => { d.open = true; });
  });
  window.addEventListener('afterprint', () => {
    closed.forEach(d => { d.open = false; });
    closed = [];
  });
})();
