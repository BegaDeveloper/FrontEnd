import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { UserDetails } from 'src/app/services/userDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listUsers: any;
  editUserModel: UserDetails = new UserDetails();
  updateForm: FormGroup;

  constructor(private http: HttpService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.updateForm = this.fb.group({
      f_name: [''],
      l_name: [''],
      adress: [''],
      z_code: [''],
      city: [''],
 })

    this.getUsers();
  }

  //GET all users
  getUsers(){
    this.http.getAllUsers().subscribe({
      next: (data: any) => {
        this.listUsers = Array.of(data['data'])[0]['data'];
      }
    });
  }

  //SET value of user 
  setEditValue(u: any){
    this.editUserModel.id = u.id;
    this.updateForm.controls['f_name'].setValue(u.f_name);
    this.updateForm.controls['l_name'].setValue(u.l_name);
    this.updateForm.controls['adress'].setValue(u.adress);
    this.updateForm.controls['z_code'].setValue(u.z_code);
    this.updateForm.controls['city'].setValue(u.city);
  }

}
