import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loading = false;
  register!: FormGroup;
  
  constructor(private fb: FormBuilder, 
              private usuarioService: UserService,
              private router: Router,
              private toastr: ToastrService) {
    this.register = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    },{validator: this.checkPassword});
   }

  ngOnInit(): void {
  }

  registrarUsuario(): void{
    //console.log(this.register.value.usuario);
    this.loading = true;
    const usuario: Usuario = {
     NameUser: this.register.value.usuario,
     Password: this.register.value.password 
    }
    this.usuarioService.saveUser(usuario).subscribe(data=>{
      console.log(data);
      this.toastr.success('Usuario '+usuario.NameUser+' registrado con exito', 'Usuario Registrado!')
      this.router.navigate(['/inicio/login'])
      this.loading = false
    },error=>{
      this.loading = false
      this.toastr.error(error.error.message,'Error!')
      this.register.reset()
    })
  }

  checkPassword(group: FormGroup):any{
    const pass= group.controls['password'].value;
    const confirmPass = group.controls['confirmPassword'].value;
    return pass === confirmPass ? null : {notSame:true};
  }

}
