
async function loadProducts(containerId){
  const response = await fetch('../data/products.json');
  const data = await response.json();
  const container = document.getElementById(containerId);

  data.products.forEach(product=>{
    container.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.name_en}">
        <div class="card-body">
          <h3>${product.name_en}</h3>
          <p>₹${product.price}</p>
          <button onclick="orderOnWhatsApp('${product.name_en}',${product.price})">Cash on Delivery</button>
        </div>
      </div>
    `;
  });
}

function orderOnWhatsApp(name,price){
  const phone = "919999999999";
  const message = `Hello, I want to order ${name} for ₹${price} with Cash on Delivery.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
}
