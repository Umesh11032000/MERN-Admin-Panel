import UsersDataTable from "@/components/features/users/users-list";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <>
      <div className="flex items-center justify-end p-4 gap-2">
        <Link to="/users/create">
          <Button
            variant="outline"
            size="sm"
            className="w-24 flex items-center gap-2 cursor-pointer"
          >
            <PlusIcon className="w-4 h-4" />
            Add User
          </Button>
        </Link>
      </div>
      <div className="p-4 pt-0">
        <UsersDataTable />
      </div>
    </>
  );
}
