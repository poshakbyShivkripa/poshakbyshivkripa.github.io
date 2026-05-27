function ensureReviewModal(){

  if(
    document.getElementById(
      'reviewModal'
    )
  ) return;

  document.body.insertAdjacentHTML(
    'beforeend',

    `
    <div
      class="review-modal"
      id="reviewModal">

      <div
        class="review-modal-backdrop"

        onclick="
          closeReviewModal()
        ">
      </div>

      <div class="review-modal-content">

        <button
          class="review-modal-close"

          onclick="
            closeReviewModal()
          ">

          ×

        </button>

        <!-- IMAGE -->

        <div class="review-modal-image-wrap">

          <img
            id="reviewModalImage"

            class="review-modal-image"

            src=""
            alt="Review Image">

          <button
            class="review-modal-nav prev"
            type="button"
            onclick="prevReviewImage()">
            ←
          </button>

          <button
            class="review-modal-nav next"
            type="button"
            onclick="nextReviewImage()">
            →
          </button>

        </div>

        <!-- INFO -->

        <div class="review-modal-info">

          <h3 id="reviewModalName"></h3>

          <div
            class="stars"
            id="reviewModalRating">
          </div>

          <p id="reviewModalText"></p>

        </div>

      </div>

    </div>
    `
  );
}

/* ===== OPEN ===== */

function openReviewModal(
  reviewIndex,
  imageIndex
){

  window.currentReviewIndex =
    reviewIndex;

  window.currentReviewImageIndex =
    imageIndex;

  updateReviewModal();

  document
    .getElementById(
      'reviewModal'
    )
    .classList.add('open');
}

/* ===== CLOSE ===== */

function closeReviewModal(){

  document
    .getElementById(
      'reviewModal'
    )
    .classList.remove('open');
}

/* ===== UPDATE ===== */

function updateReviewModal(){

  const review =
    window.reviewData[
      window.currentReviewIndex
    ];

  const image =
    review.images[
      window.currentReviewImageIndex
    ];

  document.getElementById(
    'reviewModalImage'
  ).src = image;

  document.getElementById(
    'reviewModalName'
  ).textContent = review.name;

  document.getElementById(
    'reviewModalRating'
  ).textContent = '★★★★★';

  document.getElementById(
    'reviewModalText'
  ).textContent = review.review;
}

/* ===== PREVIOUS ===== */

function prevReviewImage(){

  const review =
    window.reviewData[
      window.currentReviewIndex
    ];

  if(
    window.currentReviewImageIndex > 0
  ){

    window.currentReviewImageIndex--;

  }else{

    window.currentReviewImageIndex =
      review.images.length - 1;
  }

  updateReviewModal();
}

/* ===== NEXT ===== */

function nextReviewImage(){

  const review =
    window.reviewData[
      window.currentReviewIndex
    ];

  if(
    window.currentReviewImageIndex <
    review.images.length - 1
  ){

    window.currentReviewImageIndex++;

  }else{

    window.currentReviewImageIndex = 0;
  }

  updateReviewModal();
}

loadProductReviews();