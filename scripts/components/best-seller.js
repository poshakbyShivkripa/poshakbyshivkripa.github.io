let bestSellerWishlist = new Set();
let bestSellerProducts = [];

async function loadBestSellerProducts(){

  const response =
    await fetch(
      './data/best-seller-data.json'
    );

  bestSellerProducts =
    await response.json();

  renderBestSellerProducts(bestSellerProducts);
}

function renderBestSellerProducts(products){

  const container =
    document.getElementById(
      'best-seller-products'
    );

  container.innerHTML = `

    <!-- Header -->

    <div class="best-header">

      <div>

        <span class="best-subtitle">
          OUR FAVORITES
        </span>

        <h2 class="best-title">
          Best Sellers
        </h2>

      </div>

      <a href="./pages/products.html"
        class="view-all-btn">

        View All

      </a>

    </div>

    <!-- Products -->

    <div class="best-products">

      ${products.map(item => `

        <a href="${item.link}"
          class="product-card">

          <div class="product-image">

            <img
              src="${item.image}"
              alt="${item.title}">

            <span class="product-tag">
              ${item.tag}
            </span>

            <button
              class="wishlist-btn ${bestSellerWishlist.has(item.title) ? 'is-active' : ''}"
              type="button"
              aria-label="Add to wishlist"
              aria-pressed="${bestSellerWishlist.has(item.title)}"
              onclick="toggleBestSellerWishlist(event,'${item.title}')">
              ${bestSellerWishlist.has(item.title) ? '&#9829;' : '&#9825;'}
            </button>

          </div>

          <div class="product-details">

            <h3>
              ${item.title}
            </h3>

            <div class="product-price">

              <span class="current-price">
                &#8377;${item.price}
              </span>

              <span class="old-price">
                &#8377;${item.mrp}
              </span>

              <span class="discount">
                ${item.discount}
              </span>

            </div>

            <div class="product-rating">
              ${item.rating}
            </div>

          </div>

        </a>

      `).join('')}

    </div>

  `;
}

function toggleBestSellerWishlist(event,id){

  event.preventDefault();
  event.stopPropagation();

  if(bestSellerWishlist.has(id)){
    bestSellerWishlist.delete(id);
  } else {
    bestSellerWishlist.add(id);
  }

  renderBestSellerProducts(bestSellerProducts);
}
