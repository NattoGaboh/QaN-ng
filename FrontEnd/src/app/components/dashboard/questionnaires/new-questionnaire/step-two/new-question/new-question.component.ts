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
  awrCorrect: 0 | undefined;
  constructor(private fb:FormBuilder,
    private toastr:ToastrService) {
      this.newQuestion = this.fb.group({
        title:['', Validators.required],
        answers: this.fb.array([])
      })
     }

  ngOnInit(): void {
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
}
