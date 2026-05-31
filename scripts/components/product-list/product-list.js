let allProducts = [];

async function loadProducts(){

  const response =
    await fetch(
      '../data/product-list.json'
    );

  allProducts =
    await response.json();

  renderProducts(allProducts);
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

loadProducts();
