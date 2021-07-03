import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';
import { routes } from './routes';

import './index.css';
import App from './App';

render(() => (
    <Router routes={routes}>
      <App />
    </Router>
  ), document.getElementById('root'));
