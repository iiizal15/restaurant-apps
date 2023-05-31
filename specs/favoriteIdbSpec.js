import { itActsAsFavoriteRestaurantModel } from "./contract/restaurantcontract";
import FavoriteRestaurantIdb from "../src/scripts/data/restaurant-idb";

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
      (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (Restaurant) => {
        await FavoriteRestaurantIdb.deleteRestaurant(Restaurant.id);
      });
    });
   
    itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
  });