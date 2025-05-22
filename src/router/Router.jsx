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
import EditGroup from "../pages/EditGroup";
import ErrorPage from "../pages/ErrorPage";

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
        loader: () => fetch("/groupsData.json"),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/updateGroup/:id",
        Component: EditGroup,
        loader: ({ params }) =>
          fetch(
            `https://hobby-hub-server-ashen.vercel.app/groups/${params.id}`
          ),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/group/:id",
        loader: () => fetch("/groupsData.json"),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
        element: (
          <PrivateRoute>
            <GroupDetails></GroupDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/createGroup",
        element: (
          <PrivateRoute>
            <CreateGroup></CreateGroup>
          </PrivateRoute>
        ),
      },
      {
        path: "/myGroup",
        element: (
          <PrivateRoute>
            <MyGroup></MyGroup>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
