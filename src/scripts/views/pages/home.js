import RestaurantDb from '../../data/restaurant-source';
import restaurantData from '../templates/restaurant-container';
import '../../components/jumbotron';

const Home = {
  async render() {
    return `
    
    <jumbotron-element></jumbotron-element>
    <div class="explore">
          <div class="explore__container">
            <p><span>Explore</span> Your Favorite <span>Restaurant</span></p>
          </div>
        </div>
        <div class="restaurant-container"></div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDb.getRestaurantDb();
    const restaurantList = document.querySelector('.restaurant-container');
    restaurants.forEach((item) => {
      console.log(item.pictureId);
      restaurantList.insertAdjacentHTML('beforeend', restaurantData(item));
    });
  },
};

export default Home;
