import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
import { GlobalStyle } from './global';
import React from 'react';

export const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </React.Fragment>
  )
}