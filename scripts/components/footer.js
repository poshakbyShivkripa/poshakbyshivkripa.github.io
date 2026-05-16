
function loadFooter(){
  const base = getBasePath();
  document.getElementById("footer").innerHTML = `
  
<footer class="footer">
<div class="footer-curve">
  <img
    src="${base}assets/images/footer-curve.svg"
    alt="Footer Curve">
  </div>
  <div class="footer-container">
    <div>
      <div class="footer-logo">
        <small>POSHAK BY</small>
        <strong>Shivkripa</strong>
      </div>

      <p class="footer-shop-details">
        Authentic Rajasthani poshak and traditional women fashion inspired by royal Rajasthan culture.
      </p>
    </div>

    <div>
      <h3 class="footer-title">Quick Links</h3>

      <div class="footer-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">New Arrival</a>
        <a href="#">Best Seller</a>
      </div>
    </div>

    <div>
      <h3 class="footer-title">Customer Support</h3>

      <div class="footer-links">
        <a href="#">Contact Us</a>
        <a href="#">Wishlist</a>
        <a href="#">Cart</a>
        <a href="#">Track Order</a>
      </div>
    </div>

    <div>
      <h3 class="footer-title">Contact</h3>

      <div class="footer-links">
        <a href="#">Jaisalmer, Rajasthan</a>
        <a href="#">+91 XXXXX XXXXX</a>
        <a href="#">shivkripa.poshak.jaisalmer@gmail.com</a>
      </div>
    </div>

  </div>

  <div class="footer-bottom">
    © 2026 Poshak by Shivkripa. All Rights Reserved.
  </div>

</footer>`;
}
