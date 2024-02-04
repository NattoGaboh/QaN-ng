import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  newQuestion: FormGroup;
  question: Question | undefined;
  awrCorrect: number | undefined;
  constructor(private fb:FormBuilder,
    private toastr:ToastrService) {
      this.newQuestion = this.fb.group({
        title:['', Validators.required],
        answers: this.fb.array([])
      })
     }

  ngOnInit(): void {
    this.addAnswerByDefault();
  }

  get getRespuestas():FormArray{
    return this.newQuestion.get('answers') as FormArray;
  }

  addAnswer():void{
    this.getRespuestas.push(this.fb.group({
      description:['',Validators.required],
      isCorrect:0
    }));
  }

  addAnswerByDefault():void{
    this.addAnswer();
    this.addAnswer();
  }

  deleteAnswer(index: number):void{
    if(this.getRespuestas.length === 2){
      this.toastr.error("La pregunta debe tener mínimo 2 respuestas.", "Error!");
    }else{
      this.getRespuestas.removeAt(index);
    }
  }

  setValidAnswer(index:number):void{
    this.awrCorrect=index;
  }
}
