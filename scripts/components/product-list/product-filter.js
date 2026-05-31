let filters = {};

async function loadFilters(){

  const response =
    await fetch(
      '../data/filter-data.json'
    );

  const filterData =
    await response.json();

  const container =
    document.getElementById(
      'filter-container'
    );

  container.innerHTML =
    filterData.map(filter => `

      <div class="filter-group">

        <button
          class="filter-header">

          ${filter.name}

        </button>

        <div class="filter-options">

          ${filter.options.map(option => `

            <label>

              <input
                type="checkbox"

                data-field="${filter.field}"

                value="${option}"

                onchange="applyFilters()">

              ${option}

            </label>

          `).join('')}

        </div>

      </div>

    `).join('');
}

function applyFilters(){

  const checked =
    document.querySelectorAll(
      '.filter-options input:checked'
    );

  let filtered =
    [...allProducts];

  checked.forEach(item => {

    const field =
      item.dataset.field;

    const value =
      item.value;

    filtered =
      filtered.filter(
        product =>
          product[field] === value
      );

  });

  renderProducts(filtered);
}

loadFilters();