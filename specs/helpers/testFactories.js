import FavButtonInitiator from '../../src/scripts/utils/fav-button-initiator';
import RestaurantDataIDB from '../../src/scripts/data/restaurant-idb';

const createFavButtonPresenter = async (restaurant) => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      FavoriteRestaurantIDB:RestaurantDataIDB,
      restaurant,
    });
  };
   
  export { createFavButtonPresenter };