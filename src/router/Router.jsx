import { createBrowserRouter } from "react-router";
import MainLayoute from "../layouts/MainLayoute";
import Home from "../pages/Home";
import AllGroup from "../pages/AllGroup";
import CreateGroup from "../pages/CreateGroup";
import MyGroup from "../pages/MyGroup";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayoute,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/groupsData.json"),
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
        Component: CreateGroup,
      },
      {
        path: "/my-groups",
        Component: MyGroup,
      },
    ],
  },
]);
