import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Question } from 'src/app/models/question';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  titleQuestionnaire : string | undefined;
  descriptionQuestionnaire: string | undefined;
  listQuestions: Question[]=[]

  constructor(private questionnaireService: QuestionnaireService,
              private toastr: ToastrService, 
              private router: Router) { }

  ngOnInit(): void {
    this.titleQuestionnaire = this.questionnaireService.titleQuestionnaire;
    this.descriptionQuestionnaire = this.questionnaireService.descriptionQuestionnaire;
  }

}
