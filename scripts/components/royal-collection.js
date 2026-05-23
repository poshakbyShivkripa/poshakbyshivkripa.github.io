async function loadRoyalCollection(){

  const response =
    await fetch(
      './data/royal-collection-data.json'
    );

  const items =
    await response.json();

  const section =
    document.getElementById(
      'royal-collection'
    );

  section.innerHTML = `

    <div class="royal-collection-container">

      <!-- Left Content -->

      <div class="royal-content">

        <h2>
          Celebrate Every Moment
          in Royal Style
        </h2>

        <p>
          From festivals to family gatherings,
          our outfits are made to make you shine.
        </p>

        <a href="./pages/products.html"
          class="royal-btn">

          Explore Collection

        </a>

      </div>

      <!-- Right Images -->

      <div class="royal-scroll">

        ${items.map(item => `

          <a href="${item.link}"
            class="royal-card">

            <img
              src="${item.image}"
              alt="Royal Collection">

            <button class="royal-wishlist">

              ♡

            </button>

          </a>

        `).join('')}

      </div>

    </div>

  `;
}