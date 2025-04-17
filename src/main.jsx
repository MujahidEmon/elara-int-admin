import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Pages/Root/Root.jsx'
import Home from './Pages/Home/Home.jsx'
import AuthProvider, { AuthContext } from './Provider/AuthProvider.jsx'
import Login from './Pages/Login/Login.jsx'
import Orders from './Pages/Orders/Orders.jsx'
import AddProduct from './Pages/AddProduct/AddProduct.jsx'
import PrivateRoutes from './Routes/PrivateRoutes.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path:'/',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: '/addProduct',
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
