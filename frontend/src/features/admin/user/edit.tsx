"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchUserById, updateUser } from "@/store/slices/user/userThunks";
import type { AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectUserError,
  selectUserLoading,
  selectUserSuccess,
} from "@/store/slices/user/userSelectors";
import { useNavigate, useParams } from "react-router-dom";
import { Loader2, SaveIcon } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string(),
  password: z.string().min(1),
  role: z.string().refine((value) => ["admin", "employee"].includes(value), {
    message: "Role must be either 'admin' or 'employee'",
  }),
});

export default function EditUser() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "",
    },
  });

  const isLoading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);
  const success = useSelector(selectUserSuccess);

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

  const user = useSelector((state: any) => state.user.user);

  useEffect(() => {
    if (user) {
      form.reset(user);
    }
  }, [user, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Update User
      dispatch(
        updateUser({
          id: String(id),
          data: {
            name: values.name,
            email: values.email,
            password: values.password,
            role: values.role as "admin" | "employee",
          },
        })
      );

      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mx-auto p-10"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="employee">Employee</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <SaveIcon className="h-4 w-4 mr-1" />
                )}{" "}
                Update
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
