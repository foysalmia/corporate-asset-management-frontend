import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import CompanyProfile from './pages/CompanyProfile/CompanyProfile';

import Dashboard from './pages/CompanyProfile/Dashboard/Dashboard';
import Assets from './pages/CompanyProfile/Assets/Assets';
import Employees from './pages/CompanyProfile/Employees/Employees';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/register",
    element: <SignUp/>,
  },
  {
    path: "/login",
    element: <SignIn/>,
  },
  {
    path: "/profile",
    element: <CompanyProfile/>,
    children:[
      {
        path:"dashboard",
        element:<Dashboard/>
      },
      {
        path:"assets",
        element:<Assets/>
      },
      {
        path:"employees",
        element:<Employees/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
