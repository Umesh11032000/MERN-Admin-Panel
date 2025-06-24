import { type ColumnDef } from "@tanstack/react-table";

export type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "_id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
];

