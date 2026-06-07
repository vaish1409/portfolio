// ============================================================
//  PORTFOLIO SCRIPT – No frameworks needed, plain JavaScript
// ============================================================

// ── 1. NAVBAR: shrink on scroll ──────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── 2. HAMBURGER MENU (mobile) ───────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── 3. SCROLL ANIMATIONS ─────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

// Add fade-in class to elements you want to animate
const animateTargets = [
  '.section-header',
  '.about-text',
  '.about-stats',
  '.skill-category',
  '.project-card',
  '.interest-card',
  '.timeline-item',
  '.cert-card',
  '.contact-left',
  '.contact-form',
  '.stat-card'
];

animateTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${i * 0.08}s`;
    observer.observe(el);
  });
});

// ── 4. ACTIVE NAV LINK on scroll ─────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navItems.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--accent)';
    }
  });
});

// ── 5. CONTACT FORM – open email client ──────────────────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = document.getElementById('name').value;
    const email   = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Opens the user's email app with pre-filled fields
    const mailtoLink = `mailto:your@email.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AReply to: ${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;
  });
}

// ── 6. SMOOTH TYPING EFFECT for hero tagline ─────────────────
function typeEffect(element, text, speed = 60) {
  if (!element) return;
  element.textContent = '';
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// Optional: uncomment the lines below to enable typewriter on hero tagline
// const tagline = document.querySelector('.hero-tagline');
// if (tagline) {
//   const original = tagline.textContent;
//   typeEffect(tagline, original, 50);
// }

// ── 7. YEAR in footer ────────────────────────────────────────
// Automatically keeps the year in the footer updated
const yearEl = document.querySelector('.footer strong');
// Footer year is static text in HTML – update it manually each year.
// Or uncomment below to auto-update:
// document.querySelector('.footer').innerHTML =
//   document.querySelector('.footer').innerHTML.replace('2025', new Date().getFullYear());

console.log('%cPortfolio loaded! 🚀', 'color: #f5a623; font-size: 16px; font-weight: bold;');
