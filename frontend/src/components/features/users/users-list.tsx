"use client";

import { useEffect, useState } from "react";
import { columns } from "../../ui/datatable/columns";
import { DataTable } from "../../ui/datatable/data-table";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@/store";
import { fetchUsers } from "@/store/slices/user/userThunks";
import {
  selectUsers,
  selectUserLoading,
  selectUserError,
  selectUserSuccess,
} from "@/store/slices/user/userSelectors";
import { Link } from "react-router-dom";
import { EyeIcon, PencilLine, Trash2Icon } from "lucide-react";
import { deleteUser } from "@/store/slices/user/userThunks";
import { toast } from "sonner";

export default function UsersDataTable() {
  const dispatch: AppDispatch = useDispatch();

  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);
  const total = useSelector((state: any) => state.user.total);
  const limit = useSelector((state: any) => state.user.limit);
  const page = useSelector((state: any) => state.user.page);

  const [currentPage, setCurrentPage] = useState(page);
  const [searchQuery, setSearchQuery] = useState("");

  const success = useSelector(selectUserSuccess);

  // Fetch data when page or search query changes
  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, limit, search: searchQuery }));

    if (error) {
      toast.error(error);
    }

    console.log("success", success);

    if (success) {
      toast.success(success || "Users fetched successfully");
      dispatch(fetchUsers({ page: currentPage, limit, search: searchQuery }));
    }

  }, [currentPage, limit, searchQuery, dispatch, success, error]);

  // Reset page to 1 when search changes
  const handleSearch = (query: string) => {
    setCurrentPage(1);
    setSearchQuery(query);
  };

  return (
    <>
      <DataTable
        columns={columns}
        data={users}
        total={total}
        page={currentPage}
        limit={limit}
        loading={isLoading}
        onPageChange={setCurrentPage}
        onSearch={handleSearch}
        renderRowActions={(user) => (
          <div className="flex justify-end gap-2">
            <Link
              to={`/users/${user._id}`}
              className="text-blue-600 hover:underline"
            >
              <EyeIcon className="h-4 w-4" />
            </Link>
            <Link
              to={`/users/${user._id}/edit`}
              className="text-green-600 hover:underline"
            >
              <PencilLine className="h-4 w-4" />
            </Link>
            <button
              onClick={() =>
                window.confirm(`Are you sure you want to delete ${user.name}?`) &&
                dispatch(deleteUser(String(user._id)))
              }
              className="text-red-600 hover:underline"
            >
              <Trash2Icon className="h-4 w-4" />
            </button>
          </div>
        )}
      />
    </>
  );
}
