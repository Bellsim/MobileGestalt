// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Scroll-based fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section-inner:not(.reverse) .section-text').forEach(el => {
  el.classList.add('fade-in-left');
  observer.observe(el);
});
document.querySelectorAll('.section-inner:not(.reverse) .section-mascot').forEach(el => {
  el.classList.add('fade-in-right');
  observer.observe(el);
});
document.querySelectorAll('.section-inner.reverse .section-text').forEach(el => {
  el.classList.add('fade-in-right');
  observer.observe(el);
});
document.querySelectorAll('.section-inner.reverse .section-mascot').forEach(el => {
  el.classList.add('fade-in-left');
  observer.observe(el);
});
document.querySelectorAll('.cta-inner, .hero-content').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--teal)' : '';
      });
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => sectionObserver.observe(s));
