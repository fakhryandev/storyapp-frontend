// Import our custom CSS
import '../sass/main.scss';

import './components/index';

// Import javascript file as needed
import Index from './pages/home';
import Add from './pages/add';
import * as bootstrap from 'bootstrap';

const routes = {
  '/': Index,
  '/index.html': Index,
  '/add.html': Add,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
