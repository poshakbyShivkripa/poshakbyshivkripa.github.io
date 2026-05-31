async function loadProductDetails(){

  const response =
    await fetch(
      '../data/product-data.json'
    );

  const product =
    await response.json();

  const section =
    document.getElementById(
      'product-details-section'
    );

  section.innerHTML = `

    <div class="product-page">

      <!-- LEFT -->

      <div class="product-gallery">

        <div
          id="thumbnailContainer"
          class="thumbnail-list">
        </div>

        <div class="main-image">

          <img
            id="mainProductImage"
            src="${product.colors[0].images[0]}"
            alt="${product.title}">

          <button class="wishlist-btn">
            ♡
          </button>

        </div>

      </div>

      <!-- RIGHT -->

      <div class="product-info">

        <h1>
          ${product.title}
        </h1>

        <div class="price-wrap">

          <span class="old-price">
            ₹${product.mrp}
          </span>

          <span class="current-price">
            ₹${product.price}
          </span>

          <span class="discount">
            ${product.discount}
          </span>

        </div>

        <div class="rating-wrap">

          <span class="stars">
            ★★★★★
          </span>

          <span>
            ${product.rating}
          </span>

        </div>

        <div class="product-description">

          <h3>
            Product Details:
          </h3>

          <p>
            ${product.description}
          </p>

          <ul>

            ${product.features.map(item => `
              <li>${item}</li>
            `).join('')}

          </ul>

        </div>

        <!-- SIZES -->

        <div class="variant-section">

          <h4>
            Select Size
          </h4>

          <div class="size-list">

            ${product.sizes.map((size,index)=>`

              <button
                class="size-btn
                ${index===0 ? 'active' : ''}">

                ${size}

              </button>

            `).join('')}

          </div>

          <span class="stock-text">
            Low Stock
          </span>

        </div>

        <!-- COLORS -->

        <div class="variant-section">

          <h4>
            Color
          </h4>

          <div class="color-list">

            ${product.colors.map((color,index)=>`

              <button
                class="color-btn
                ${index===0 ? 'active' : ''}"

                style="
                  background:${color.code}
                "

                onclick="
                  changeGallery(
                    ${index},
                    productData
                  )
                ">
              </button>

            `).join('')}

          </div>

        </div>

        <!-- BUTTONS -->

        <div class="product-actions mobile-sticky-actions">

          <button class="add-cart-btn">
            Add To Cart
          </button>

          <button class="buy-btn">
            Buy Now
          </button>

        </div>

      </div>

    </div>

  `;

  window.productData = product;

  changeGallery(0, product);
}

/* ===== CHANGE GALLERY ===== */

function changeGallery(
  index,
  product
){

  const images =
    product.colors[index].images;

  const mainImage =
    document.getElementById(
      'mainProductImage'
    );

  mainImage.src = images[0];

  const thumbnails =
    document.getElementById(
      'thumbnailContainer'
    );

  thumbnails.innerHTML =
    images.map((img,i)=>`

      <div
        class="thumbnail
        ${i===0 ? 'active' : ''}"

        onclick="
          changeMainImage(
            '${img}',
            this
          )
        ">

        <img
          src="${img}"
          alt="Thumbnail">

      </div>

    `).join('');
}

/* ===== MAIN IMAGE ===== */

function changeMainImage(
  image,
  element
){

  document.getElementById(
    'mainProductImage'
  ).src = image;

  document
    .querySelectorAll('.thumbnail')
    .forEach(item=>{
      item.classList.remove('active');
    });

  element.classList.add('active');
}

loadProductDetails();