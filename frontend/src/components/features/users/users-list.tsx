"use client";

import { useEffect, useState } from "react";
import { columns } from "../../ui/datatable/columns"
import { DataTable } from "../../ui/datatable/data-table"
import type { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { fetchUsers } from "@/store/slices/user/userThunks";

export default function UsersDataTable() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setIsLoading(true);
        const response = await dispatch(fetchUsers()).unwrap();
        if (response?.data?.users) {
          setData(response.data.users);
        } else {
          console.error('Unexpected API response format:', response);
          setError('Received unexpected data format from server');
          setData([]);
        }
        setError(null);
      } catch (err) {
        console.error("Failed to fetch users:", err);
        setError("Failed to load users. Please try again later.");
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="container mx-auto py-10 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
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

  return (
      <DataTable columns={columns} data={data} />
  );
}