import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { PasswordValidationService } from 'src/app/services/password-validation.service';
import { UserDetails } from 'src/app/services/userDetails';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: any;
  updateForm: FormGroup;
  editUserModel: UserDetails = new UserDetails();

  constructor(private http:HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private passVal: PasswordValidationService) {}

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id']);
    this.user = this.route.snapshot.data['user']['data'];

    this.route.data.subscribe((res: any) => {
     // this.editUserModel = res.user;
      this.updateForm = this.fb.group({
        f_name: [this.user.f_name , [Validators.required]],
        l_name: [this.user.l_name, [Validators.required]],
        adress: [this.user.adress, [Validators.required]],
        z_code: [this.user.z_code, [Validators.required]],
        city: [this.user.city, [Validators.required]],
        password: ['', [Validators.minLength(3)]],
        confirmPassword: ['', [Validators.minLength(3)]],

      },
      {
        validator: this.passVal.passwordMatchValidator('password', 'confirmPassword')
      }
    )
  })
}

//Passwords
get confirmPassword() {
  return this.updateForm.get("confirmPassword");
}

get password() {
  return this.updateForm.get("password");
}

  mustMatch(controlName: string, matchinhControlName: string){
    return(formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchinhControl = formGroup.controls[matchinhControlName];
      if(matchinhControl.errors && !matchinhControl.errors['mustMatch']){
        return
      } 
      if(control.value !== matchinhControl.value){
        matchinhControl.setErrors({mustMatch: true})
      } else {
        matchinhControl.setErrors(null);
      }
    }

  }

  //GET User
  getUser(){
    this.http.getUser(this.route.snapshot.params['id']).subscribe((res:any) => {
      //console.log(res.status);
      if(res.status){
        this.user = res.data;
      }
    });
  }

  //UPDATE user
  updateTheUser(){
   this.editUserModel.id = this.user.id;
   this.editUserModel.u_name = this.user.u_name;
   this.editUserModel.f_name = this.updateForm.value.f_name;
   this.editUserModel.l_name = this.updateForm.value.l_name;
   this.editUserModel.adress = this.updateForm.value.adress;
   this.editUserModel.z_code = this.updateForm.value.z_code;
   this.editUserModel.city = this.updateForm.value.city;
   this.editUserModel.pass = this.updateForm.value.password;

    this.http.updateUser(this.editUserModel.id, this.editUserModel ).subscribe((res) => {
      console.log(res);
      alert('User updated');
      this.updateForm.reset();
      this.router.navigate(['/home']);
    })
  }
 
}
