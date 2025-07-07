"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";

import type { AppDispatch } from "@/store";
import {
  selectQuestionnaire,
  selectQuestionnaireError,
  selectQuestionnaireLoading,
  selectQuestionnaireSuccess,
} from "@/store/slices/questionnaire/questionnaireSelectors";
import { fetchQuestionnaireById } from "@/store/slices/questionnaire/questionnaireThunks";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ViewQuestionnaire() {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const isLoading = useSelector(selectQuestionnaireLoading);
  const error = useSelector(selectQuestionnaireError);
  const success = useSelector(selectQuestionnaireSuccess);
  const questionnaire = useSelector(selectQuestionnaire);

  useEffect(() => {
    if (id) {
      dispatch(fetchQuestionnaireById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  useEffect(() => {
    if (success) toast.success(success);
  }, [success]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!questionnaire) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        No questionnaire found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-2xl">{questionnaire.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{questionnaire.description}</p>
          <p className="text-sm text-muted-foreground mt-2">
            Created at: {new Date(questionnaire.createdAt).toLocaleString()}
          </p>
        </CardContent>
      </Card>

      {questionnaire.questions?.length > 0 ? (
        questionnaire.questions.map((q, index) => (
          <Card key={q._id}>
            <CardHeader>
              <CardTitle className="text-lg">
                Q{index + 1}. {q.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {q.options?.length > 0 ? (
                q.options.map((opt) => (
                  <div
                    key={opt._id}
                    className="flex items-center justify-between px-4 py-2 rounded-md border hover:bg-muted transition"
                  >
                    <span>{opt.option}</span>
                    {opt.is_correct && (
                      <Badge
                        variant="default"
                        className="flex items-center gap-1"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        Correct
                      </Badge>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  No options available.
                </p>
              )}
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="text-muted-foreground">No questions available.</p>
      )}
    </div>
  );
}
