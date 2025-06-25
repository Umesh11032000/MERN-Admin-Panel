import Layout from "@/components/layout";
import { Navigate, useRoutes } from "react-router-dom";
import Login from "@/features/authentication/login/page";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import Register from "@/features/authentication/register/page";
import Home from "@/features/admin/home/page";
import Users from "@/features/admin/user/page";
import { useEffect } from "react";
import { toast } from "sonner";

const privateRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        title: "Home",
        path: "/home",
        element: <Home />,
      },
      {
        title: "Users",
        path: "/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" replace />,
  },
];

const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "*", element: <Navigate to="/login" replace /> },
];

export const RoutesApp = () => {
  const { success, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (success) {
      toast.success(success);
    }
    if (error) {
      toast.error(error);
    }
  }, [success, error]);

  return useRoutes(isAuthenticated ? privateRoutes : publicRoutes);
};
