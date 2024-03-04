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
import AddAsset from './pages/CompanyProfile/Assets/AddAsset';
import AssetHome from './pages/CompanyProfile/Assets/AssetHome';
import DistributeAsset from './pages/CompanyProfile/Distribute/DistributeAsset';
import EmployeeHome from './pages/CompanyProfile/Employees/EmployeeHome';
import AddEmployee from './pages/CompanyProfile/Employees/AddEmployee';
import Distribute from './pages/CompanyProfile/Distribute/Distribute';
import DistributeHome from './pages/CompanyProfile/Distribute/DistributeHome';

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
        element:<Assets/>,
        children:[
          {
            path: "",
            element: <AssetHome/>
          },
          {
            path:"add-asset",
            element: <AddAsset/>
          },
        ]
      },
      {
        path:"employees",
        element:<Employees/>,
        children:[
          {
            path: "",
            element: <EmployeeHome />
          },
          {
            path: "add-employee",
            element: <AddEmployee />
          },
        ]
      },
      {
        path:"distribute",
        element: <Distribute/>,
        children:[
          {
            path: "",
            element: <DistributeHome />
          },
          {
            path: "distribute-asset",
            element: <DistributeAsset />
          },
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
