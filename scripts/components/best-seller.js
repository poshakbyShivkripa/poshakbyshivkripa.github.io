async function loadBestSellerProducts(){

  const response =
    await fetch(
      './data/best-seller-data.json'
    );

  const products =
    await response.json();

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

            <button class="wishlist-btn">

              ♡

            </button>

          </div>

          <div class="product-details">

            <h3>
              ${item.title}
            </h3>

            <div class="product-price">

              <span class="current-price">
                ₹${item.price}
              </span>

              <span class="old-price">
                ₹${item.mrp}
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