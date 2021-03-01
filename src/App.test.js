import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home'
import { Provider } from 'react-redux'
import store from './redux/store'

test('renders home without crash', () => {
  render(<Router>
    <Provider store={store}>
      <Home />
    </Provider>
  </Router>);
  const linkElement = screen.getByText(/c3flix/i);
  expect(linkElement).toBeInTheDocument();
});
