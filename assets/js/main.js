function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');

  menu.classList.toggle('show');
  hamburger.classList.toggle('open');
  document.body.classList.toggle('nav-open');
}

  // Select all menu links
  const navLinks = document.querySelectorAll('.nav a');

  // Get current page path (e.g., "/about-us.html")
  const currentPage = window.location.pathname.split('/').pop() || "index.html";

const current = window.location.pathname;

document.querySelectorAll('.nav a').forEach(link => {
  if (link.pathname === current) {
    link.classList.add('active');
  }
});
