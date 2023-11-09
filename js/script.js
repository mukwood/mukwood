// Navigation Toggle for Mobile Responsiveness
document.getElementById('toggleTheme').addEventListener('click', function() {
  document.documentElement.classList.toggle('dark-theme');
});

document.getElementById('toggleMenu').addEventListener('click', function() {
  document.querySelector('.nav').classList.toggle('active');
});


// Page Transition Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Theme Toggle
document.getElementById('toggleTheme').addEventListener('click', function() {
  document.documentElement.classList.toggle('dark-theme');
});

// Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, { threshold: 0.5 });

  sections.forEach(section => {
      observer.observe(section);
  });
});
