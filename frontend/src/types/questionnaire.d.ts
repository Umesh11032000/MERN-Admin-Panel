export interface Questionnaire {
    _id: string;
    title: string;
    description: string;
    questions: {
        question: string;
        type: string;
        is_required: boolean;
        options: {
            option: string;
        }[];
    }[];
    createdAt: Date;
    updatedAt: Date;
}