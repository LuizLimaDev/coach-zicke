import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from './routes/Main';
import Servicos from './routes/Servicos';
import Contato from './routes/Contato';
import Coach from './routes/Coach';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/servicos',
        element: <Servicos />
      },
      {
        path: '/contato',
        element: <Contato />
      },
      {
        path: '/coach',
        element: <Coach />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
