import FavoriteRestaurantIdb from "../src/scripts/data/restaurant-idb";
import * as TestFactories from './helpers/testFactories';

describe('Liking  Restaurant', () => {
    const addFavButtonContainer = () => {
      document.body.innerHTML = '<div id="favButtonContainer"></div>';
    };
  
    beforeEach(() => {
      addFavButtonContainer();
    });
  
    it('should show the like button when the restaurant has not been liked before', async () => {
      await TestFactories.createFavButtonPresenter({ id: 1 });
  
      expect(document.querySelector('[aria-label="favorite this place"]'))
        .toBeTruthy();
    });
  
    it('should not show the unlike button when the restaurant has not been liked before', async () => {
      await TestFactories.createFavButtonPresenter({ id: 1 });
  
      expect(document.querySelector('[aria-label="unfavorite this restaurant"]'))
        .toBeFalsy();
    });
  
    it('should be able to like the restaurant', async () => {
      await TestFactories.createFavButtonPresenter({ id: 1 });
  
      document.querySelector('#favButton').dispatchEvent(new Event('click'));
  
      const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
      expect(restaurant).toEqual({ id: 1 });
  
      FavoriteRestaurantIdb.deleteRestaurant(1);
    });
  
    it('should not add a restaurant again when its already liked', async () => {
      await TestFactories.createFavButtonPresenter({ id: 1 });
  
      await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  
      document.querySelector('#favButton').dispatchEvent(new Event('click'));
  
      expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
  
      FavoriteRestaurantIdb.deleteRestaurant(1);
    });
  
    it('should not add a restaurant when it has no id', async () => {
      await TestFactories.createFavButtonPresenter({});
  
      document.querySelector('#favButton').dispatchEvent(new Event('click'));
  
      expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
  });
  