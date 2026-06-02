let royalWishlist = new Set();
let royalCollectionItems = [];

async function loadRoyalCollection(){

  const response =
    await fetch(
      './data/royal-collection-data.json'
    );

  royalCollectionItems =
    await response.json();

  renderRoyalCollection(royalCollectionItems);
}

function renderRoyalCollection(items){

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

        ${items.map((item,index) => `

          <a href="${item.link}"
            class="royal-card">

            <img
              src="${item.image}"
              alt="Royal Collection">

            <button
              class="royal-wishlist ${royalWishlist.has(index) ? 'is-active' : ''}"
              type="button"
              aria-label="Add to wishlist"
              aria-pressed="${royalWishlist.has(index)}"
              onclick="toggleRoyalWishlist(event,${index})">
              ${royalWishlist.has(index) ? '&#9829;' : '&#9825;'}
            </button>

          </a>

        `).join('')}

      </div>

    </div>

  `;
}

function toggleRoyalWishlist(event,id){

  event.preventDefault();
  event.stopPropagation();

  if(royalWishlist.has(id)){
    royalWishlist.delete(id);
  } else {
    royalWishlist.add(id);
  }

  renderRoyalCollection(royalCollectionItems);
}
