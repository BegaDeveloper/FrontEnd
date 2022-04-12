import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { UserDetails } from 'src/app/services/userDetails';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addForm: FormGroup;
  addUserModel: UserDetails = new UserDetails();
  
  constructor(private http:HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      u_name: ['', [Validators.required]],
      f_name: ['', [Validators.required]],
      l_name: ['', [Validators.required]],
      adress: ['', [Validators.required]],
      z_code: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pass: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  get u_name() {
    return this.addForm.get('u_name');
  }

  get f_name() {
    return this.addForm.get('f_name');
  }

  get l_name() {
    return this.addForm.get('l_name');
  }

  get adress() {
    return this.addForm.get('adress');
  }

  get z_code() {
    return this.addForm.get('z_code');
  }

  get city() {
    return this.addForm.get('city');
  }

  get pass() {
    return this.addForm.get('pass');
  }

  postTheUser(){
    this.addUserModel.u_name = this.addForm.value.u_name;
    this.addUserModel.f_name = this.addForm.value.f_name;
    this.addUserModel.l_name = this.addForm.value.l_name;
    this.addUserModel.adress = this.addForm.value.adress;
    this.addUserModel.z_code = this.addForm.value.z_code;
    this.addUserModel.city = this.addForm.value.city;
    this.addUserModel.pass = this.addForm.value.pass;

    this.http.postUser(this.addUserModel).subscribe( res => {
      console.log(res);
      this.addForm.reset();
      this.router.navigate(['/home']);
    })

  }

}
