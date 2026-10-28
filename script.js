const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    toggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contactForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('customerName').value.trim();
  const email = document.getElementById('customerEmail').value.trim();
  const service = document.getElementById('serviceSelect').value;
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('New Digital Hub enquiry: ' + service);
  const body = encodeURIComponent(
    'Name: ' + name + '\nCustomer email: ' + (email || 'Not provided') +
    '\nService: ' + service + '\n\nMessage:\n' + message +
    '\n\nPlease do not send passwords, OTPs or sensitive banking/identity data by email.'
  );
  document.getElementById('formStatus').textContent = 'Opening your email app. The form does not store or submit data to a server.';
  window.location.href = 'mailto:alibabachalischor024@gmail.com?subject=' + subject + '&body=' + body;
});
