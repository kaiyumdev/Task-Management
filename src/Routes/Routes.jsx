import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../Shared/Login";
import SingUp from "../Shared/SingUp";
import DashboardLayout from "../layouts/DashboardLayouts/DashboardLayouts";
import Dashboard from "../layouts/DashboardLayouts/Dashboard";
import PrivateRoute from "./PrivateRoutes/PrivateRoutes";
import AddTask from "../layouts/DashboardLayouts/AddTask";
import AllTasks from "../layouts/DashboardLayouts/AllTasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SingUp></SingUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/addTask",
        element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
      },
      {
        path: "/dashboard/allTasks",
        element: <PrivateRoute><AllTasks></AllTasks></PrivateRoute>
      }
    ],
  },
]);
