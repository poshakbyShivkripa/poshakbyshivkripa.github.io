async function loadCategorySlider(){

  const response =
    await fetch(
      './data/category-data.json'
    );

  const categories =
    await response.json();

  const container =
    document.getElementById(
      'category-slider'
    );

  container.innerHTML = `

    <div class="section-heading">

      <span>
        EXPLORE OUR COLLECTION
      </span>

      <div class="section-divider">

    <span></span>

    <img
      src="./assets/images/divider.svg"
      alt="Divider">

    <span></span>

  </div>

      <h2>
        Shop by Category
      </h2>

    </div>

    <div class="category-scroll">

      ${categories.map(item => `

        <a href="${item.link}"
          class="category-card">

          <div class="category-image">

            <img
              src="${item.image}"
              alt="${item.title}">

          </div>

          <h3>${item.title}</h3>

          <p>${item.subtitle}</p>

        </a>

      `).join('')}

    </div>

  `;
}