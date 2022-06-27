import { Optional } from "@angular/core";

export class Answer{
    id?: number;
    description: string;
    isOk: boolean;
    /**
     *
     */
    constructor( description: string, isOk: boolean, id?: number) {
        this.id = id;
        this.description = description;
        this.isOk = isOk;
    }
}