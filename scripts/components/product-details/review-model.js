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
          type="button"

          onclick="
            closeReviewModal()
          ">

          &times;

        </button>

        <div
          class="review-modal-list-panel"
          id="reviewModalListPanel">

          <div class="review-modal-list-header">

            <h3>
              Customer Reviews
            </h3>

          </div>

          <div
            class="review-modal-list"
            id="reviewModalList">
          </div>

        </div>

        <div
          class="review-modal-image-panel"
          id="reviewModalImagePanel">

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
              &#8592;
            </button>

            <button
              class="review-modal-nav next"
              type="button"
              onclick="nextReviewImage()">
              &#8594;
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

    </div>
    `
  );
}

function setReviewModalMode(
  mode
){

  const modal =
    document.getElementById(
      'reviewModal'
    );

  modal.classList.toggle(
    'show-list',
    mode === 'list'
  );

  modal.classList.toggle(
    'show-image',
    mode === 'image'
  );
}

/* ===== OPEN ALL REVIEWS ===== */

function openAllReviewsModal(){

  ensureReviewModal();

  const list =
    document.getElementById(
      'reviewModalList'
    );

  list.innerHTML =
    window.reviewData
      .map((item,reviewIndex)=>
        createReviewCard(
          item,
          reviewIndex
        )
      ).join('');

  setReviewModalMode(
    'list'
  );

  document
    .getElementById(
      'reviewModal'
    )
    .classList.add('open');
}

/* ===== OPEN IMAGE ===== */

function openReviewModal(
  reviewIndex,
  imageIndex
){

  ensureReviewModal();

  window.currentReviewIndex =
    reviewIndex;

  window.currentReviewImageIndex =
    imageIndex;

  updateReviewModal();

  setReviewModalMode(
    'image'
  );

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
  ).innerHTML = '&#9733;&#9733;&#9733;&#9733;&#9733;';

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
