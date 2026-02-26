const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

function closeMenu() {
  navList?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}

navToggle?.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav__link').forEach((a) => {
  a.addEventListener('click', closeMenu);
});

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());