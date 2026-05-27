async function loadCompleteLook(){

  const response =
    await fetch(
      '../data/complete-look-data.json'
    );

  const products =
    await response.json();

  const section =
    document.getElementById(
      'complete-look-section'
    );

  section.innerHTML = `

    <div class="complete-header">

      <h2>
        Complete the Look
      </h2>

    </div>

    <div class="complete-products">

      ${products.map(item => `

        <a href="${item.link}"
          class="complete-card">

          <div class="complete-image">

            <img
              src="${item.image}"
              alt="${item.title}">

            <button class="wishlist-btn">
              ♡
            </button>

          </div>

          <h3>
            ${item.title}
          </h3>

          <div class="complete-price">

            <span class="current-price">
              ₹${item.price}
            </span>

            <span class="old-price">
              ₹${item.mrp}
            </span>

          </div>

          <div class="stars">
            ★★★★★
          </div>

        </a>

      `).join('')}

    </div>

  `;
}

loadCompleteLook();