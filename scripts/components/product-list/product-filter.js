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
    `
      <h2 class="filter-sidebar-title">Filters</h2>

      <div class="filter-panel-header">
        <h2>Filters</h2>
        <button
          class="filter-close-btn"
          type="button"
          aria-label="Close filters"
          onclick="toggleMobileFilters()">
          &times;
        </button>
      </div>
    ` +
    filterData.map(filter => `

      <div class="filter-group">

        <button
          class="filter-header"
          type="button"
          aria-expanded="false"
          onclick="toggleFilterGroup(this)">

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

  visibleProducts = filtered;

  renderProducts(getSortedProducts(visibleProducts));
}

function toggleMobileFilters(){

  const container =
    document.getElementById(
      'filter-container'
    );

  const sortPanel =
    document.getElementById(
      'mobile-sort-panel'
    );

  sortPanel.classList.remove('is-open');

  container.classList.toggle('is-open');
}

function toggleFilterGroup(button){

  const group =
    button.closest(
      '.filter-group'
    );

  const isOpen =
    group.classList.toggle(
      'is-open'
    );

  button.setAttribute(
    'aria-expanded',
    isOpen
  );
}

loadFilters();
