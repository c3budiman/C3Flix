import { render, screen } from '@testing-library/react';
import Home from './Pages/Home';
import { Provider } from 'react-redux'
import store from './redux/store'

test('renders home without crash', () => {
  render(<Provider store={store}>
    <Home />
  </Provider>);
  const linkElement = screen.getByText(/c3flix/i);
  expect(linkElement).toBeInTheDocument();
});
