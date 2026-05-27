// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navMenu.classList.remove('open'));
});

// Subjects for autocomplete
const subjects = [
  'Python', 'JavaScript', 'Java', 'C++', 'Data Science', 'Machine Learning',
  'Mathematics', 'Calculus', 'Algebra', 'Statistics', 'Geometry',
  'Physics', 'Chemistry', 'Biology', 'Astronomy',
  'Spanish', 'French', 'Mandarin', 'German', 'Japanese', 'Arabic',
  'English', 'Creative Writing', 'Essay Writing',
  'Guitar', 'Piano', 'Violin', 'Music Theory', 'Drums',
  'Chess', 'Drawing', 'Painting', 'Photography',
  'History', 'Geography', 'Economics', 'Psychology',
  'SAT Prep', 'ACT Prep', 'GMAT', 'GRE', 'IELTS',
];

const heroSearch = document.getElementById('heroSearch');
const autocomplete = document.getElementById('autocomplete');

heroSearch.addEventListener('input', () => {
  const q = heroSearch.value.trim().toLowerCase();
  if (!q) { autocomplete.classList.remove('show'); autocomplete.innerHTML = ''; return; }
  const matches = subjects.filter(s => s.toLowerCase().includes(q)).slice(0, 6);
  if (!matches.length) { autocomplete.classList.remove('show'); return; }
  autocomplete.innerHTML = matches.map(m => `<li onclick="pickSubject('${m}')">${m}</li>`).join('');
  autocomplete.classList.add('show');
});

document.addEventListener('click', e => {
  if (!e.target.closest('.search-box')) {
    autocomplete.classList.remove('show');
  }
});

function pickSubject(s) {
  heroSearch.value = s;
  autocomplete.classList.remove('show');
  autocomplete.innerHTML = '';
}

function fillSearch(s) {
  heroSearch.value = s;
  heroSearch.focus();
}

function goSearch() {
  const q = heroSearch.value.trim();
  if (!q) return;
  alert(`Searching for tutors in: ${q}\n\n(Sign up to connect with verified tutors!)`);
}

heroSearch.addEventListener('keydown', e => {
  if (e.key === 'Enter') goSearch();
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.bento-card, .how-step, .step-circle').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

document.querySelectorAll('.tutor-text, .kids-text, .global-text').forEach(el => {
  el.classList.add('reveal-left');
  revealObserver.observe(el);
});

document.querySelectorAll('.tutor-visual, .kids-visual, .global-visual').forEach(el => {
  el.classList.add('reveal-right');
  revealObserver.observe(el);
});

document.querySelectorAll('.cta-inner, .hero-left').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 40
    ? 'rgba(0,229,200,0.18)'
    : 'rgba(0,229,200,0.08)';
});
