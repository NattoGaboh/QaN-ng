import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  datosCuestionario: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private questionnaireService: QuestionnaireService) {
      this.datosCuestionario = this.fb.group({
        titulo: ['', Validators.required],
        descripcion: ['',Validators.required]
      })
     }

  ngOnInit(): void {
  }

  stepOne(): void{
    this.router.navigate(['/dashboard/newQuestionnaire/stepTwo']);
  }

}
