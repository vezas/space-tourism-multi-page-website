import React, { createRef } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { Home } from 'src/pages/Home';
import { Destination } from 'src/pages/Destination';
import { Crew } from 'src/pages/Crew';
import { Technology } from 'src/pages/Technology';
import 'src/index.scss';

export const routes = [
  {
    path: '/',
    element: <Home />,
    nodeRef: createRef()
  },
  {
    path: '/destination',
    element: <Destination />,
    nodeRef: createRef()
  },
  {
    path: '/crew',
    element: <Crew />,
    nodeRef: createRef()
  },
  {
    path: '/technology',
    element: <Technology />,
    nodeRef: createRef()
  }
];

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes.map(({ path, element }) => ({ path, element }))
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
