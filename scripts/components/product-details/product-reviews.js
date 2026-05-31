function createReviewCard(
  item,
  reviewIndex
){

  return `

    <div class="review-card">

      <!-- TOP -->

      <div class="review-top">

        <div>

          <h4>
            ${item.name}
          </h4>

          <div class="stars">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </div>

        </div>

      </div>

      <!-- REVIEW -->

      <p>
        ${item.review}
      </p>

      <!-- REVIEW IMAGES -->

      <div class="review-images">

        ${item.images.map((img,imageIndex)=>`

          <button
            class="review-image-btn"
            type="button"

            onclick="
              openReviewModal(
                ${reviewIndex},
                ${imageIndex}
              )
            ">

            <img
              src="${img}"
              alt="${item.name}">

          </button>

        `).join('')}

      </div>

    </div>

  `;
}

async function loadProductReviews(){

  const response =
    await fetch(
      '../data/reviews-data.json'
    );

  const reviews =
    await response.json();

  const section =
    document.getElementById(
      'product-reviews-section'
    );

  section.innerHTML = `

    <div class="review-header">

      <h2>
        Customer Reviews
      </h2>

      <button
        class="view-review-btn"
        type="button"
        onclick="
          openAllReviewsModal()
        ">
        View All
      </button>

    </div>

    <div class="review-list">

      ${reviews
        .slice(0,2)
        .map((item,reviewIndex)=>
          createReviewCard(
            item,
            reviewIndex
          )
        ).join('')}

    </div>

  `;

  window.reviewData = reviews;

  ensureReviewModal();
}
