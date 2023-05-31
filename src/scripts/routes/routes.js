import Home from '../views/pages/home';
import Detail from '../views/pages/details';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '*': 'NotFound',
};

export default routes;
