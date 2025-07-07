"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { fetchUserById } from "@/store/slices/user/userThunks";
import type { AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectUserError,
  selectUserLoading,
  selectUserSuccess,
} from "@/store/slices/user/userSelectors";
import { useNavigate, useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";

export default function ViewUser() {
  const isLoading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);
  const success = useSelector(selectUserSuccess);
  const user = useSelector((state: any) => state.user.user);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id && !error) {
      dispatch(fetchUserById(id));

      if (success) {
        navigate("/users");
      }
    }

    if (error) {
      toast.error(error);
    }
  }, [id, error, success]);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        <div className="space-y-4 mx-auto p-10">
          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <Loader2 className="animate-spin w-6 h-6 text-muted-foreground" />
            </div>
          ) : (
            <>
              <DetailRow label="Name" value={user?.name} />
              <DetailRow label="Email" value={user?.email} />
              <DetailRow label="Role" value={user?.role || "Not Assigned"} />
            </>
          )}

          <div className="text-center pt-4">
            <Button onClick={() => navigate("/users")}>Back to Users</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center border-b pb-2">
      <span className="font-medium text-muted-foreground">{label}:</span>
      <span className="text-foreground">{value || "-"}</span>
    </div>
  );
}
