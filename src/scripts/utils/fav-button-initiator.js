import FavoriteRestaurantIDB from '../data/restaurant-idb';
import {
  createFavButtonTemplate,
  createFavedButtonTemplate,
} from '../views/templates/favorite-template';

const FavButtonInitiator = {
  async init({ favButtonContainer, restaurant }) {
    this._favButtonContainer = favButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFaved();
    } else {
      this._renderFav();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIDB.getRestaurant(id);
    return !!restaurant;
  },

  _renderFav() {
    this._favButtonContainer.innerHTML = createFavButtonTemplate();

    const favButton = document.querySelector('#favButton');
    favButton.addEventListener('click', async () => {
      await FavoriteRestaurantIDB.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderFaved() {
    this._favButtonContainer.innerHTML = createFavedButtonTemplate();

    const favButton = document.querySelector('#favButton');
    favButton.addEventListener('click', async () => {
      await FavoriteRestaurantIDB.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavButtonInitiator;
