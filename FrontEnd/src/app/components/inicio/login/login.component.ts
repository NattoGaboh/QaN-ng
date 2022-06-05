import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  login: FormGroup;

  constructor(private fb:FormBuilder, 
              private toastr: ToastrService, 
              private router: Router,
              private loginService: LoginService) {
    this.login = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  log(): void{
    console.log(this.login);

    const usuario: Usuario = {
      NameUser: this.login.value.usuario,
      Password: this.login.value.password
    }
    this.loading = true;
    this.loginService.login(usuario).subscribe(data=>{
      console.log(data)
      this.loading = false;
      this.loginService.setLocalStorage(data.usuario)
      this.router.navigate(['/dashboard']);
    }, error=>{
      this.loading = false;
      this.toastr.error(error.error.message,"Error!");
      this.login.reset();
    });
/*    setTimeout(()=>{
      if (usuario.NameUser === 'renato' && usuario.Password === '12345') {
        this.login.reset();
        this.router.navigate(['/dashboard'])
      }else{
        this.toastr.error('Usuario o contraseña incorrecta', 'Error')
        this.login.reset();
      }
      this.loading = false;
    },3000)*/
//    console.log(usuario);
   }
}
