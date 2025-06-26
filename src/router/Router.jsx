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
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../layouts/DashboardHome";
import DashboardAllGroup from "../components/DashboardAllGroup";
import Profile from "../components/Profile";

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
        path: "about",
        Component: AboutUs,
      },
      {
        path: "contact",
        Component: ContactUs,
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
        path: "/allGroups",
        Component: AllGroup,
        loader: () => fetch("/groupsData.json"),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "group/:id",
        loader: () => fetch("/groupsData.json"),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
        element: (
          <PrivateRoute>
            <GroupDetails></GroupDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    loader: () => fetch("/groupsData.json"),
    hydrateFallbackElement: <LoadingPage></LoadingPage>,
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "all-group",
        Component: DashboardAllGroup,
      },
      {
        path: "myGroup",
        Component: MyGroup,
      },
      {
        path: "createGroup",
        Component: CreateGroup,
      },
      {
        path: "updateGroup/:id",
        Component: EditGroup,
        loader: ({ params }) =>
          fetch(
            `https://hobby-hub-server-ashen.vercel.app/groups/${params.id}`
          ),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
