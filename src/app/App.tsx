import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { About, Cocktail, HomeLayout } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/cocktail',
    element: <Cocktail />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
