import { Question } from "./question";

export class Questionnaire{
    id?: number;
    name: string;
    description: string;
    createDate: Date;
    listQuestion: Question[];
    /**
     *
     */
    constructor(name: string, description: string, createDate: Date, listQuestion: Question[]) {
        this.name = name;
        this.description = description;
        this.createDate = createDate;
        this.listQuestion = listQuestion;
    }
}