import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import '../styles/detail.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const skipToContent = document.querySelector('.skip-to-content');
skipToContent.addEventListener('click', () => {
  document.querySelector('#content').scrollIntoView({ behavior: 'smooth' });
  skipToContent.blur();
});

const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu');
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
