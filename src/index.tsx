import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { Home } from 'src/pages/Home';
import { Destination } from 'src/pages/Destination';
import { Crew } from 'src/pages/Crew';
import { Technology } from 'src/pages/Technology';
import 'src/index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/destination', element: <Destination /> },
      { path: '/crew', element: <Crew /> },
      { path: '/technology', element: <Technology /> }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
