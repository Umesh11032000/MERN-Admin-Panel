"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@/store";
import { toast } from "sonner";
import { fetchQuestionnaires } from "@/store/slices/questionnaire/questionnaireThunks";
import {
  selectQuestionnaireError,
  selectQuestionnaireLoading,
  selectQuestionnaires,
  selectQuestionnaireSuccess,
} from "@/store/slices/questionnaire/questionnaireSelectors";
import { DataTable } from "@/components/ui/datatable/data-table";
import { columns } from "../../questionnaires/list/columns";

export default function QuestionnairesDataTable() {
  const dispatch: AppDispatch = useDispatch();

  const questionnaires = useSelector(selectQuestionnaires);
  const isLoading = useSelector(selectQuestionnaireLoading);
  const error = useSelector(selectQuestionnaireError);
  const total = useSelector((state: any) => state.questionnaire.total);
  const limit = useSelector((state: any) => state.questionnaire.limit);
  const page = useSelector((state: any) => state.questionnaire.page);

  const [currentPage, setCurrentPage] = useState(page);
  const [searchQuery, setSearchQuery] = useState("");

  const success = useSelector(selectQuestionnaireSuccess);

  // Fetch data when page or search query changes
  useEffect(() => {
    if (!error) {
      dispatch(
        fetchQuestionnaires({
          page: currentPage,
          limit,
          search: searchQuery,
        })
      );

      if (success) {
        toast.success(success || "Questionnaires fetched successfully");
        dispatch(
          fetchQuestionnaires({
            page: currentPage,
            limit,
            search: searchQuery,
          })
        );
      }
    }

    if (error) {
      toast.error(error);
    }
  }, [currentPage, limit, searchQuery, error, success]);

  // Reset page to 1 when search changes
  const handleSearch = (query: string) => {
    setCurrentPage(1);
    setSearchQuery(query);
  };

  return (
    <>
      <DataTable
        columns={columns}
        data={questionnaires}
        total={total}
        page={currentPage}
        limit={limit}
        loading={isLoading}
        onPageChange={setCurrentPage}
        onSearch={handleSearch}
        renderRowActions={(row) => (
          <div className="flex justify-end gap-2">Row #{row._id}</div>
        )}
      />
    </>
  );
}
