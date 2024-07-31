import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './ui/RootLayout'
import Blogs from './features/blog/Blogs'
import AddForm from './features/blog/AddForm'
import EditForm from './features/blog/EditForm'

const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Blogs />
        },
        {
          path: 'add-blog',
          element: <AddForm />
        },
        {
          path: 'edit-blogs/:id',
          element: <EditForm />
        }
      ]
    },
  ])

  return <RouterProvider router={router} />
}

export default App