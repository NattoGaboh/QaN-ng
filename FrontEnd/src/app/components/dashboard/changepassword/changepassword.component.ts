import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  changePass: FormGroup;
  constructor(private fb: FormBuilder) {
    this.changePass = this.fb.group({
      passBefore: ['', Validators.required],
      newPass: ['',[ Validators.required,Validators.minLength(4)]],
      confirmPass: ['',] 
    },{validator: this.checkPassword});
   }

  ngOnInit(): void {
  }

  checkPassword(group: FormGroup):any{
    const pass= group.controls['newPass'].value;
    const confirmPass = group.controls['confirmPass'].value;
    return pass === confirmPass ? null : {notSame:true};
  }
  savePassword(): void{
    console.log(this.changePass)
  }
}
