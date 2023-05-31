import FavoriteRestaurantIdb from "../src/scripts/data/restaurant-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Unliking A Restaurant", () => {
    const addFavButtonContainer = () => {
      document.body.innerHTML = '<div id="favButtonContainer"></div>';
    };
  
    beforeEach(async () => {
      addFavButtonContainer();
      await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    });
  
    afterEach(async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(1);
    });
  
    it("should display unlike widget when the restaurant has been liked", async () => {
      await TestFactories.createFavButtonPresenter({ id: 1 });
  
      expect(document.querySelector('[aria-label="unfavorite this restaurant"]'))
        .toBeTruthy();
    });
  
    it("should not display like widget when the restaurant has been liked", async () => {
      await TestFactories.createFavButtonPresenter({ id: 1 });
  
      expect(document.querySelector('[aria-label="favorite this place"]'))
      .toBeFalsy();
    });
  
    it("should be able to remove liked restaurant from the list", async () => {
      await TestFactories.createFavButtonPresenter({ id: 1 });
  
      document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event("click"));
  
      expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
  
    it("should not throw error if the unliked restaurant is not in the list", async () => {
      await TestFactories.createFavButtonPresenter({ id: 1 });
  
      await FavoriteRestaurantIdb.deleteRestaurant(1);
  
      document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event("click"));
  
      expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
  });