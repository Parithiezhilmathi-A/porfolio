
// Theme toggle, animations on scroll, mobile nav, and form status feedback
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if(navToggle){
    navToggle.addEventListener('click', function(){
      if(navLinks.style.display === 'block') navLinks.style.display = '';
      else navLinks.style.display = 'block';
    });
  }

  // Theme toggle & persistence
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const preferred = localStorage.getItem('theme');
  if(preferred === 'dark') document.body.classList.add('dark');

  function updateIcon(){
    themeIcon.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  }
  updateIcon();

  themeToggle.addEventListener('click', function(){
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: 600 });
    updateIcon();
  });

  // Simple intersection observer for anims
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, {threshold: 0.15});

  document.querySelectorAll('.anim').forEach(el => observer.observe(el));

  // Form feedback (Formsubmit redirects, but we'll show a status on submit)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if(form){
    form.addEventListener('submit', function(e){
      status.textContent = 'Sending...';
      // let the form submit normally (third-party form handler will handle)
      setTimeout(()=>{ status.textContent = 'If this is your first time using the form, check your email to confirm (Formsubmit). Otherwise message sent!'; }, 1200);
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        window.scrollTo({top: target.offsetTop - 60, behavior: 'smooth'});
      }
      if(navLinks) navLinks.style.display = ''; // auto close nav on mobile
    });
  });
});
