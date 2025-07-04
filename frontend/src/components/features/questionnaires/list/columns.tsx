import type { Questionnaire } from "@/types/questionnaire";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Questionnaire>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];
