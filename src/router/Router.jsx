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
