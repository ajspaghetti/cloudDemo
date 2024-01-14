import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

test('renders learn react link', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  await waitFor(() => {
    expect(screen.getByText(/learn/i)).toBeInTheDocument();
  });
});
