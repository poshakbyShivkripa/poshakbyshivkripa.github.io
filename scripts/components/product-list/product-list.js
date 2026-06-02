let allProducts = [];
let visibleProducts = [];
let currentSort = 'default';
let wishlistProducts = new Set();

async function loadProducts(){

  const response =
    await fetch(
      '../data/product-list.json'
    );

  allProducts =
    await response.json();

  visibleProducts = [...allProducts];

  renderProducts(getSortedProducts(visibleProducts));
}

function renderProducts(products){

  const grid =
    document.getElementById(
      'productGrid'
    );

  grid.innerHTML =
    products.map(product => `

      <a
        href="products.html?id=${product.id}"

        class="product-card">

        <div class="product-image">

          <img
            src="${product.image}"
            alt="${product.title}">

          <span class="product-tag">
            ${product.tag}
          </span>

          <button
            class="wishlist-btn ${wishlistProducts.has(product.id) ? 'is-active' : ''}"
            type="button"
            aria-label="Add to wishlist"
            aria-pressed="${wishlistProducts.has(product.id)}"
            onclick="toggleWishlist(event,'${product.id}')">
            ${wishlistProducts.has(product.id) ? '&#9829;' : '&#9825;'}
          </button>

        </div>

        <div class="product-details">

          <h3>
            ${product.title}
          </h3>

          <div class="product-price">

            <span class="current-price">

              ₹${product.price}

            </span>

            <span class="old-price">

              ₹${product.mrp}

            </span>

          </div>

          <div class="rating">

            ★ ${product.rating}

          </div>

        </div>

      </a>

    `).join('');
}

function toggleWishlist(event,id){

  event.preventDefault();
  event.stopPropagation();

  if(wishlistProducts.has(id)){
    wishlistProducts.delete(id);
  } else {
    wishlistProducts.add(id);
  }

  renderProducts(getSortedProducts(visibleProducts));
}

function getSortedProducts(products){

  const sorted =
    [...products];

  if(currentSort === 'price-low'){
    sorted.sort((a,b) => a.price - b.price);
  }

  if(currentSort === 'price-high'){
    sorted.sort((a,b) => b.price - a.price);
  }

  if(currentSort === 'rating-high'){
    sorted.sort((a,b) => b.rating - a.rating);
  }

  if(currentSort === 'name-az'){
    sorted.sort((a,b) => a.title.localeCompare(b.title));
  }

  return sorted;
}

function applySort(value){

  currentSort = value;

  document
    .querySelectorAll('[data-sort-select]')
    .forEach(select => {
      select.value = value;
    });

  updateSortOptions();

  renderProducts(getSortedProducts(visibleProducts));
}

function setupSortControls(){

  document
    .querySelectorAll('[data-sort-select]')
    .forEach(select => {
      select.addEventListener('change', event => {
        applySort(event.target.value);
      });
    });
}

function updateSortOptions(){

  document
    .querySelectorAll('[data-sort-option]')
    .forEach(button => {
      button.classList.toggle(
        'is-active',
        button.dataset.sortOption === currentSort
      );
    });
}

function toggleMobileSort(){

  const panel =
    document.getElementById(
      'mobile-sort-panel'
    );

  const filterPanel =
    document.getElementById(
      'filter-container'
    );

  filterPanel.classList.remove('is-open');

  panel.classList.toggle('is-open');
}

function selectMobileSort(value){

  applySort(value);

  const panel =
    document.getElementById(
      'mobile-sort-panel'
    );

  panel.classList.remove('is-open');
}

setupSortControls();
updateSortOptions();
loadProducts();
