const itActsAsFavoriteRestaurantModel = (FavoriteRestaurantIDB) => {
  it('should return the restaurant that has been added', async () => {
    FavoriteRestaurantIDB.putRestaurant({ id: 1 });
    FavoriteRestaurantIDB.putRestaurant({ id: 2 });

    expect(await FavoriteRestaurantIDB.getRestaurant(1)).toEqual({ id: 1 });
    expect(await FavoriteRestaurantIDB.getRestaurant(2)).toEqual({ id: 2 });
    expect(await FavoriteRestaurantIDB.getRestaurant(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    FavoriteRestaurantIDB.putRestaurant({ aProperty: 'property' });

    expect(await FavoriteRestaurantIDB.getAllRestaurants()).toEqual([]);
  });

  it('can return all of the restaurant that have been added', async () => {
    FavoriteRestaurantIDB.putRestaurant({ id: 1 });
    FavoriteRestaurantIDB.putRestaurant({ id: 2 });

    expect(await FavoriteRestaurantIDB.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    FavoriteRestaurantIDB.putRestaurant({ id: 1 });
    FavoriteRestaurantIDB.putRestaurant({ id: 2 });
    FavoriteRestaurantIDB.putRestaurant({ id: 3 });

    await FavoriteRestaurantIDB.deleteRestaurant(1);

    expect(await FavoriteRestaurantIDB.getAllRestaurants()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the movie has not been added', async () => {
    FavoriteRestaurantIDB.putRestaurant({ id: 1 });
    FavoriteRestaurantIDB.putRestaurant({ id: 2 });
    FavoriteRestaurantIDB.putRestaurant({ id: 3 });

    await FavoriteRestaurantIDB.deleteRestaurant(4);

    expect(await FavoriteRestaurantIDB.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

export { itActsAsFavoriteRestaurantModel };
