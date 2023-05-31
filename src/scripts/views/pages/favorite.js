import RestaurantDataIDB from '../../data/restaurant-idb';
import cardComponent from '../templates/restaurant-container';

const Favorite = {
  async render() {
    return `
        <div class="restaurant-container card-container-favorite"></div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDataIDB.getAllRestaurants();
    const restaurantList = document.querySelector('.restaurant-container');
    if (restaurants.length === 0) {
      restaurantList.innerHTML = '<h3>No favorite restaurants found.<h3>';
    } else {
      restaurants.forEach((item) => {
        console.log(item);
        restaurantList.insertAdjacentHTML('beforeend', cardComponent(item));
      });
    }
  },
};

export default Favorite;
