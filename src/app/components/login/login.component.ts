import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  thisForm: FormGroup;
  pass: string;
  
  constructor(private fb: FormBuilder, private http: HttpService, private route: Router) { }

  ngOnInit(): void {
    
  }

  //On login
  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    } 

    const username = form.value.username;
    const password = form.value.password;

    this.http.login_proccess(username, password).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/home']);
      form.reset();
    })
    
  }


 

}
