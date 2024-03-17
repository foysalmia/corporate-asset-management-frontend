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
import ContextApi from './components/Context/ContextApi';
import Protected from './components/ProtectedRoute/Protected';
import AssetDetail from './pages/CompanyProfile/Assets/AssetDetail/AssetDetail';
import EmployeeDetail from './pages/CompanyProfile/Employees/EmployeeDetail/EmployeeDetail';
import AssetEdit from './pages/CompanyProfile/Assets/AssetDetail/AssetEdit';
import EmployeeEdit from './pages/CompanyProfile/Employees/EmployeeDetail/EmployeeEdit';

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
    element: <Protected><CompanyProfile /></Protected>,
    children:[
      {
        path:"dashboard",
        element: <Protected><Dashboard /></Protected>,
      },
      {
        path:"assets",
        element: <Protected><Assets /></Protected>,
        children:[
          {
            path: "",
            element: <Protected><AssetHome /></Protected>
          },
          {
            path:"add-asset",
            element: <Protected><AddAsset /></Protected>
          },
          {
            path:":assetId",
            element: <Protected><AssetDetail/></Protected>
          },
          {
            path:"edit/:assetId",
            element: <Protected><AssetEdit/></Protected>
          },
        ]
      },
      {
        path:"employees",
        element: <Protected><Employees /></Protected>,
        children:[
          {
            path: "",
            element: <Protected><EmployeeHome /></Protected>
          },
          {
            path: "add-employee",
            element: <Protected><AddEmployee /></Protected>
          },
          {
            path: ":employeeId",
            element: <Protected><EmployeeDetail /></Protected>
          },
          {
            path: "edit/:employeeId",
            element: <Protected><EmployeeEdit /></Protected>
          },
        ]
      },
      {
        path:"distribute",
        element: <Protected><Distribute /></Protected>,
        children:[
          {
            path: "",
            element: <Protected><DistributeHome /></Protected>
          },
          {
            path: "distribute-asset",
            element: <Protected><DistributeAsset /></Protected>
          },
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
      <RouterProvider router={router} />
    </ContextApi>
  </React.StrictMode>,
)
