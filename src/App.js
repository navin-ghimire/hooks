import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './ui/RootLayout'
import Home from './features/dashboard/Home'
import Blogs from './features/blog/Blogs'

const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Blogs />
        }
      ]
    },
  ])

  return <RouterProvider router={router} />
}

export default App