import { Answer } from "./answer";

export class Question{
    description: string;
    listAnswer: Answer[];
    hide?: boolean;
    /**
     *
     */
    constructor(description: string, answers: Answer[]) {
        this.description = description;
        this.listAnswer = answers;
    }
}