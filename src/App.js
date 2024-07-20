import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './components/RootLayout';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,

        },

        {
          path: 'about-page',
          element: <About />
        },
        {
          path: 'contact-page',
          element: <Contact />
        },

        {
          path: '*',
          element: <NotFound />
        }



      ]

    },



  ]);

  return <RouterProvider router={router} />
}

export default App