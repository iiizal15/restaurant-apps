const createFavButtonTemplate = () => `
  <button aria-label="favorite this place" id="favButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createFavButtonTemplate, createFavedButtonTemplate };
