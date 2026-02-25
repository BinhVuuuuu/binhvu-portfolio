// Mobile menu
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

function closeMenu() {
  if (!navList) return;
  navList.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}

navToggle?.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav__link').forEach((a) => {
  a.addEventListener('click', closeMenu);
});

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

// Demo contact form (no backend)
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = String(formData.get('name') || '');
  alert(`Thanks${name ? `, ${name}` : ''}! This demo form doesn't send emails yet.`);
  form.reset();
});