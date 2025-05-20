import { createBrowserRouter } from "react-router";
import MainLayoute from "../layouts/MainLayoute";
import Home from "../pages/Home";
import AllGroup from "../pages/AllGroup";
import CreateGroup from "../pages/CreateGroup";
import MyGroup from "../pages/MyGroup";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LoadingPage from "../components/LoadingPage";
import PrivateRoute from "./PrivateRoute";
import GroupDetails from "../pages/GroupDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayoute,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/groupsData.json"),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/all-groups",
        Component: AllGroup,
      },
      {
        path: "/group-details/:id",
        loader: () => fetch("/groupsData.json"),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
        element: (
          <PrivateRoute>
            <GroupDetails></GroupDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/create-group",
        element: (
          <PrivateRoute>
            <CreateGroup></CreateGroup>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-groups",
        element: (
          <PrivateRoute>
            <MyGroup></MyGroup>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
