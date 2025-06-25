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
} from "@/store/slices/user/userSelectors";
import { Loader } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function UsersDataTable() {
  const dispatch: AppDispatch = useDispatch();

  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);
  const total = useSelector((state: any) => state.user.total);
  const limit = useSelector((state: any) => state.user.limit);
  const page = useSelector((state: any) => state.user.page);

  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, limit }));
  }, [dispatch, currentPage, limit]);

  const totalPages = Math.ceil(total / limit);

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

  const getPaginationItems = () => {
    const items = [];

    for (let i = 1; i <= totalPages; i++) {
      // You can limit the number of visible items if needed (e.g., sliding window)
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            isActive={i === currentPage}
            onClick={() => setCurrentPage(i)}
            href="#"
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <div className="space-y-4">
      <DataTable columns={columns} data={users} />

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev: number) => Math.max(prev - 1, 1));
              }}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>

          {getPaginationItems()}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev: number) =>
                  Math.min(prev + 1, totalPages)
                );
              }}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
