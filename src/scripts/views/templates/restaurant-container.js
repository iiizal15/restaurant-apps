import API_ENDPOINT from '../../globals/api-endpoint';

const restaurantData = (restaurantItem) => `
  <div class="restaurant" tabindex="0">
    <div class="restaurant-image">
      <img class="lazyload" data-src=${API_ENDPOINT.RESTAURANT_IMAGE + restaurantItem.pictureId} alt="${restaurantItem.name} Image" />
    </div>
    <div class="restaurant-content">
      <a class="card-link-button" href="#/detail/${restaurantItem.id}">${restaurantItem.name} - ${restaurantItem.city}</a>
    </div>
    <div class="restaurant-head">
      <p class="restaurant-rating">Rating: ${restaurantItem.rating}</p>
    </div>
    <p class="restaurant-desc">
      ${restaurantItem.description.substring(0, 80)}...
    </p>

  </div>
  </div >
    </div >
  `;

export default restaurantData;
