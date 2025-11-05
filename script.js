
// Simple JS: mobile nav toggle & smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if(navToggle){
    navToggle.addEventListener('click', function(){
      if(navLinks.style.display === 'block') navLinks.style.display = '';
      else navLinks.style.display = 'block';
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
