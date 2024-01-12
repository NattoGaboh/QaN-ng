import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './components/dashboard/changepassword/changepassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StepOneComponent } from './components/dashboard/questionnaires/new-questionnaire/step-one/step-one.component';
import { StepTwoComponent } from './components/dashboard/questionnaires/new-questionnaire/step-two/step-two.component';
import { NewQuestionComponent } from './components/dashboard/questionnaires/new-questionnaire/step-two/new-question/new-question.component';
import  {NewQuestionnaireComponent} from './components/dashboard/questionnaires/new-questionnaire/new-questionnaire.component';
import { QuestionnairesComponent } from './components/dashboard/questionnaires/questionnaires.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component: InicioComponent, children: [
    {path: '', component: BienvenidaComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
  ]},
  {path:'dashboard', component: DashboardComponent, children:[
    {path: '', component: QuestionnairesComponent},
    {path: 'changepassword', component: ChangepasswordComponent},
    {path: 'newQuestionnaire', component: NewQuestionnaireComponent, children:[
      {path: 'stepOne', component: StepOneComponent},
      {path: 'stepTwo', component: StepTwoComponent}
    ]}
  ]},
  {path: '**', redirectTo:'/inicio', pathMatch:'full'}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
