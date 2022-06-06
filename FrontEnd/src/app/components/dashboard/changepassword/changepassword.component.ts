import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  loading = false;
  changePass: FormGroup;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private toastr: ToastrService,
              private router: Router) {
    this.changePass = this.fb.group({
      passwordBefore: ['', Validators.required],
      passwordNew: ['',[ Validators.required,Validators.minLength(4)]],
      confirmPass: ['',] 
    },{validator: this.checkPassword});
   }

  ngOnInit(): void {
  }

  checkPassword(group: FormGroup):any{
    const pass= group.controls['passwordNew'].value;
    const confirmPass = group.controls['confirmPass'].value;
    return pass === confirmPass ? null : {notSame:true};
  }
  savePassword(): void{
    console.log(this.changePass);
    this.loading = true;
    const changePwd: any ={
      passwordBefore: this.changePass.value.passwordBefore,
      passwordNew: this.changePass.value.passwordNew
    };
    console.log(changePwd);
    this.userService.changePassword(changePwd).subscribe(data =>{
      this.toastr.info(data.message)
      this.router.navigate(['/dashboard'])
    },error=>{
      this.loading=false;
      this.changePass.reset();
      this.toastr.error(error.message,'Error!');
    })
  }
}
