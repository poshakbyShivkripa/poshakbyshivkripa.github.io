
function getBasePath(){
  return window.location.pathname.includes('/pages/') ? '../' : '';
}

function setActiveNav(){

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');

    const href = link.getAttribute('href');
    if(!href || href === '#') return;

    const pageName = href.split('/').pop();

    if(pageName === currentPage){
      link.classList.add('active');
    }
  });

  // Only one active menu at a time
  const activeLinks = document.querySelectorAll('nav a.active');

  if(activeLinks.length > 1){
    activeLinks.forEach((item,index)=>{
      if(index !== 0){
        item.classList.remove('active');
      }
    });
  }

  // Home only on homepage
  if(currentPage === 'index.html' || currentPage === ''){
    document.querySelectorAll('nav a').forEach(link=>{
      link.classList.remove('active');
    });

    const home = document.querySelector('nav a[href$="index.html"]');
    if(home){
      home.classList.add('active');
    }
  }
}

function loadHeader(){

  const base = getBasePath();
  const iconPath = `${base}assets/icons/`;
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const isHomePage = currentPage === 'index.html' || currentPage === '';

  document.getElementById("header").innerHTML = `
<div class="header-wrapper">

<div class="top-strip">
  <div><span>🚚</span><span>Free Shipping on Orders Above ₹1999</span></div>
  <div><span>💳</span><span>COD Available</span></div>
  <div><span>🔄</span><span>Easy Returns & Exchange</span></div>
</div>

<header>

  <div class="header-left">
    ${
      isHomePage
        ? `
          <button class="mobile-menu-toggle" type="button" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        `
        : `
          <button class="mobile-back-btn" type="button" aria-label="Go back">
            &lt;
          </button>
        `
    }

    <div class="logo">
      <small>POSHAK BY</small>
      <strong>Shivkripa</strong>
    </div>
  </div>

  <nav class="main-nav">
    <button class="drawer-close" type="button" aria-label="Close menu">×</button>

    <a href="${base}index.html">Home</a>

    <div class="dropdown">
      <a href="#">Shop ▾</a>
      <div class="dropdown-menu">
        <a href="${base}pages/products.html">Poshak</a>
        <a href="${base}pages/products.html">Lehenga</a>
        <a href="${base}pages/products.html">Kurta Sets</a>
      </div>
    </div>

    <div class="dropdown">
      <a href="#">Categories ▾</a>
      <div class="dropdown-menu">
        <a href="${base}pages/products.html">Traditional</a>
        <a href="${base}pages/products.html">Daily Wear</a>
        <a href="${base}pages/products.html">Wedding Collection</a>
      </div>
    </div>

    <a href="${base}pages/new-arrival.html">New Arrival</a>
    <a href="${base}pages/best-seller.html">Best Seller</a>
    <a href="${base}pages/about.html">About Us</a>
    <a href="${base}pages/contact.html">Contact Us</a>
  </nav>

  <div class="header-icons">
    <a href="#" class="icon-btn">
      <img src="${iconPath}search.svg" alt="Search">
    </a>

    <a href="${base}pages/wishlist.html" class="icon-btn">
      <img src="${iconPath}wishlist.svg" alt="Wishlist">
    </a>

    <a href="${base}pages/login.html" class="icon-btn">
      <img src="${iconPath}user.svg" alt="User">
    </a>

    <a href="${base}pages/cart.html" class="icon-btn icon-bag">
      <img src="${iconPath}cart.svg" alt="Cart">
      <span class="icon-badge">1</span>
    </a>
  </div>

  <div class="drawer-backdrop"></div>

</header>

</div>
`;

setActiveNav();

  const body = document.body;
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const backButton = document.querySelector('.mobile-back-btn');
  const drawerClose = document.querySelector('.drawer-close');
  const backdrop = document.querySelector('.drawer-backdrop');
  let touchStartX = 0;

  function openDrawer(){
    body.classList.add('drawer-open');
  }

  function closeDrawer(){
    body.classList.remove('drawer-open');
  }

  if(menuToggle){
    menuToggle.addEventListener('click', openDrawer);
  }

  if(backButton){
    backButton.addEventListener('click', () => {
      if(window.history.length > 1){
        window.history.back();
        return;
      }

      window.location.href = `${base}index.html`;
    });
  }

  if(drawerClose){
    drawerClose.addEventListener('click', closeDrawer);
  }

  if(backdrop){
    backdrop.addEventListener('click', closeDrawer);
  }

  document.addEventListener('keydown', event => {
    if(event.key === 'Escape'){
      closeDrawer();
    }
  });

  document.addEventListener('touchstart', event => {
    touchStartX = event.touches[0].clientX;
  });

  document.addEventListener('touchend', event => {
    const touchEndX = event.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;

    if(isHomePage && touchStartX < 40 && diff > 50){
      openDrawer();
    }

    if(body.classList.contains('drawer-open') && diff < -50){
      closeDrawer();
    }
  });
}
