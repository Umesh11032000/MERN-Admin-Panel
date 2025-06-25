"use client";

import { useEffect } from "react";
import { columns } from "../../ui/datatable/columns";
import { DataTable } from "../../ui/datatable/data-table";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@/store";
import { fetchUsers } from "@/store/slices/user/userThunks";
import {
  selectUsers,
  selectUserLoading,
  selectUserError,
} from "@/store/slices/user/userSelectors";
import { Loader } from "lucide-react";

export default function UsersDataTable() {
  const dispatch: AppDispatch = useDispatch();

  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="container mx-auto py-10 flex justify-center items-center">
        <Loader className="animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-10 text-center text-red-500">
        {error}
      </div>
    );
  }

  return <DataTable columns={columns} data={users} />;
}
