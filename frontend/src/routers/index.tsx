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
import EditUser from "@/features/admin/user/edit";
import ViewUser from "@/features/admin/user/view";
import CreateUser from "@/features/admin/user/create";
import CreateQuestionnaire from "@/features/admin/questionnaire/create";
import Questionnaire from "@/features/admin/questionnaire/page";

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
      // Add User
      {
        title: "Add User",
        path: "/users/create",
        element: <CreateUser />,
      },
      {
        title: "Users",
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <ViewUser />,
      },
      {
        path: "/users/:id/edit",
        element: <EditUser />,
      },
      // Create questionnaire
      {
        title: "Create Questionnaire",
        path: "/questionnaires/create",
        element: <CreateQuestionnaire />,
      },
      {
        title: "Questionnaires",
        path: "/questionnaires",
        element: <Questionnaire />,
      },
      {
        path: "/questionnaires/:id",
        element: <ViewUser />,
      },
      {
        path: "/questionnaires/:id/edit",
        element: <EditUser />,
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
