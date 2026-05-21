async function loadHeroSlider(){

  const response =
    await fetch('./data/slider-data.json');

  const slides = await response.json();

  const slider =
    document.getElementById('hero-slider');

  slider.innerHTML = slides.map((item,index)=>`

    <div class="slide ${index === 0 ? 'active' : ''}">

      <img src="${item.image}" alt="${item.title}">

      <div class="slide-overlay"></div>

      <div class="slide-content">

        <span>${item.subtitle}</span>

        <h1>${item.title}</h1>

        <p>${item.description}</p>

        <a href="${item.link}">
          ${item.button}
        </a>

      </div>

    </div>

  `).join('');

  startSlider();
}

function startSlider(){

  const slides =
    document.querySelectorAll('.slide');

  let current = 0;

  setInterval(()=>{

    slides[current]
      .classList.remove('active');

    current =
      (current + 1) % slides.length;

    slides[current]
      .classList.add('active');

  },5000);
}