// PROTEIN BOX CENTRO — comportamento compartilhado entre páginas

// Header shadow on scroll
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  });
}

// Mobile menu
const burger = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .01, rootMargin: '0px 0px -5% 0px' });
revealEls.forEach(el => io.observe(el));
window.addEventListener('load', () => {
  setTimeout(() => { revealEls.forEach(el => el.classList.add('in')); }, 1600);
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  if (!q || !a) return;
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o => { o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null; });
    if (!isOpen) { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
  });
});
