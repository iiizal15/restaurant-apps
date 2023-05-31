import RestaurantDb from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FavButtonInitiator from '../../utils/fav-button-initiator';
import detailComponent from '../templates/detail-component';

const Detail = {
  async render() {
    return `
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDb.detailRestaurantDb(url.id);
    const container = document.getElementById('content');
    container.innerHTML = detailComponent(restaurant);

    FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
