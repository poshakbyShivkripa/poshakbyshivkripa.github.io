async function loadTrustSection(){

  const response =
    await fetch(
      './data/trust-data.json'
    );

  const items =
    await response.json();

  const section =
    document.getElementById(
      'trust-section'
    );

  section.innerHTML = `

    <div class="trust-container">

      <!-- Heading -->

      <div class="trust-heading">

        <span>
          WHY CHOOSE US
        </span>

        <div class="section-divider">

          <span></span>

          <img
            src="./assets/images/divider.svg"
            alt="Divider">

          <span></span>

        </div>

        <h2>
          Crafted for You,
          Inspired by Tradition
        </h2>

      </div>

      <!-- Features -->

      <div class="trust-grid">

        ${items.map(item => `

          <div class="trust-card">

            <div class="trust-icon">

              <img
                src="${item.icon}"
                alt="${item.title}">

            </div>

            <h3>
              ${item.title}
            </h3>

            <p>
              ${item.subtitle}
            </p>

          </div>

        `).join('')}

      </div>

    </div>

  `;
}