// Required dependencies:
// npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities

"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  GripVerticalIcon,
  Trash2Icon,
  PlusIcon,
  SplinePointer,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@/store";
import { createQuestionnaire } from "@/store/slices/questionnaire/questionnaireThunks";
import {
  selectQuestionnaireError,
  selectQuestionnaireLoading,
  selectQuestionnaireSuccess,
} from "@/store/slices/questionnaire/questionnaireSelectors";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const QUESTION_TYPES = [
  { label: "Single Choice", value: "single" },
  { label: "Multiple Choice", value: "multiple" },
  { label: "Text", value: "text" },
  { label: "Numeric", value: "numeric" },
  { label: "Date", value: "date" },
  { label: "Time", value: "time" },
  { label: "Boolean", value: "boolean" },
  { label: "File", value: "file" },
];

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  questions: z
    .array(
      z.object({
        id: z.string(),
        question: z.string().min(1, "Question is required"),
        type: z.enum([
          "single",
          "multiple",
          "text",
          "numeric",
          "date",
          "time",
          "boolean",
          "file",
        ]),
        is_required: z.boolean(),
        options: z.array(z.string()).optional(),
      })
    )
    .min(1, "At least one question is required"),
});

function SortableQuestionCard({
  id,
  index,
  form,
  onRemove,
  question,
}: {
  id: string;
  index: number;
  form: any;
  onRemove: () => void;
  question: any;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isOptionBased =
    question.type === "single" || question.type === "multiple";
  const questions = form.watch("questions");

  return (
    <Card ref={setNodeRef} style={style} className="border border-muted">
      <CardHeader className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button {...attributes} {...listeners} className="cursor-grab">
            <GripVerticalIcon className="w-4 h-4 text-muted-foreground" />
          </button>
          <CardTitle>Question {index + 1}</CardTitle>
        </div>
        <Button type="button" variant="ghost" size="icon" onClick={onRemove}>
          <Trash2Icon className="h-4 w-4 text-red-500" />
        </Button>
      </CardHeader>

      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name={`questions.${index}.question` as const}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Input placeholder="Enter question" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`questions.${index}.type` as const}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question Type</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {QUESTION_TYPES.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`questions.${index}.is_required` as const}
          render={({ field }) => (
            <FormItem className="flex items-center gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-sm">Required</FormLabel>
            </FormItem>
          )}
        />

        {isOptionBased && (
          <div className="space-y-2">
            {question.options?.map((_opt: string, oIndex: number) => (
              <FormField
                key={oIndex}
                control={form.control}
                name={`questions.${index}.options.${oIndex}` as const}
                render={({ field }) => (
                  <FormItem className="flex gap-2 items-center">
                    <FormControl>
                      <Input placeholder={`Option ${oIndex + 1}`} {...field} />
                    </FormControl>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        const updated = [...questions];
                        updated[index].options.splice(oIndex, 1);
                        form.setValue("questions", updated);
                      }}
                    >
                      <Trash2Icon className="h-4 w-4 text-red-400" />
                    </Button>
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                const updated = [...questions];
                updated[index].options.push("");
                form.setValue("questions", updated);
              }}
            >
              <PlusIcon className="h-4 w-4 mr-1" /> Add Option
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function CreateQuestionnaire() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      questions: [
        {
          id: crypto.randomUUID(),
          question: "",
          type: "single",
          is_required: false,
          options: ["", ""],
        },
      ],
    },
  });

  const isLoading = useSelector(selectQuestionnaireLoading);
  const error = useSelector(selectQuestionnaireError);
  const success = useSelector(selectQuestionnaireSuccess);

  const questions = form.watch("questions");
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = questions.findIndex((q) => q.id === active.id);
    const newIndex = questions.findIndex((q) => q.id === over.id);
    const newQuestions = arrayMove(questions, oldIndex, newIndex);
    form.setValue("questions", newQuestions);
  };

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success(success || "User created successfully");
      navigate("/users");
    }
  }, [error, success]);

  const onSubmit = (values: {
    title: string;
    description?: string;
    questions: {
      id: string;
      question: string;
      type:
        | "single"
        | "multiple"
        | "text"
        | "numeric"
        | "date"
        | "time"
        | "boolean"
        | "file";
      is_required: boolean;
      options?: string[];
    }[];
  }) => {
    const payload = {
      title: values.title,
      description: values.description,
      questions: values.questions.map((q, index) => ({
        ...q,
        order: index + 1,
        options: (q.options || []).map((opt, i) => ({
          option: opt,
          order: i + 1,
        })),
      })),
    };

    dispatch(createQuestionnaire(payload));
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Questionnaire</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={questions.map((q) => q.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {questions.map((q, index) => (
                    <SortableQuestionCard
                      key={q.id}
                      id={q.id}
                      index={index}
                      question={q}
                      form={form}
                      onRemove={() => {
                        const updated = [...questions];
                        updated.splice(index, 1);
                        form.setValue("questions", updated);
                      }}
                    />
                  ))}
                </SortableContext>
              </DndContext>

              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={() =>
                    form.setValue("questions", [
                      ...questions,
                      {
                        id: crypto.randomUUID(),
                        question: "",
                        type: "single",
                        is_required: false,
                        options: ["", ""],
                      },
                    ])
                  }
                >
                  <PlusIcon className="h-4 w-4 mr-1" /> Add Question
                </Button>
                <Button type="submit">
                  {isLoading ? <SplinePointer /> : "Create Questionnaire"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
