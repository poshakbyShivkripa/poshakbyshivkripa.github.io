
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

  document.getElementById("header").innerHTML = `
<div class="header-wrapper">

<div class="top-strip">
  <div><span>🚚</span><span>Free Shipping on Orders Above ₹1999</span></div>
  <div><span>💳</span><span>COD Available</span></div>
  <div><span>🔄</span><span>Easy Returns & Exchange</span></div>
</div>

<header>

  <div class="logo">
    <small>POSHAK BY</small>
    <strong>Shivkripa</strong>
  </div>

  <nav>
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

</header>

</div>
`;

setActiveNav();
}
