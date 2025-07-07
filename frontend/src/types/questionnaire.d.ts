export interface Questionnaire {
    _id: string;
    title: string;
    description: string;
    questions: {
        _id: Key;
        question: string;
        type: string;
        is_required: boolean;
        options: {
            _id: Key;
            option: string;
            is_correct: any;
        }[];
    }[];
    createdAt: Date;
    updatedAt: Date;
}