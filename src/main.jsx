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
import PendingOrder from './Pages/PendingOrders/PendingOrder.jsx'
import CanceledOrders from './Pages/CanceledOrders/CanceledOrders.jsx'
import ConfirmedOrders from './Pages/ConfirmedOrders/ConfirmedOrders.jsx'
import OrderEditPage from './Pages/OrderEditPage/OrderEditPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path:'/',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>,
        children: [
          {
            path:'/pending',
            element: <PendingOrder></PendingOrder>
          },
          {
            path:'/confirmed',
            element: <ConfirmedOrders></ConfirmedOrders>
          },
          {
            path:'canceled',
            element:<CanceledOrders></CanceledOrders>
          }
        ]
      },
      {
        path: '/addProduct',
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/editOrder/:id',
        element: <OrderEditPage></OrderEditPage>,
        loader: ({ params }) =>
          fetch(`https://elara-international-server.onrender.com/orders/${params.id}`)
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
