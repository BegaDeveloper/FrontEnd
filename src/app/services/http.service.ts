import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BASE_URL:string = 'http://localhost:4200/api/';
  private login:string = this.BASE_URL + 'login/login_proccess';
  private getUsers: string = this.BASE_URL + 'users/getAllUsers';
  private getTheUser: string = this.BASE_URL + 'users/getUser/';
  private postTheUser: string = this.BASE_URL + 'users/postUser';
  private putUser: string = this.BASE_URL + 'users/updateUser/'

  user = new Subject<User>();

  constructor(private http: HttpClient, private route: Router) { }
  
  //Login service
  login_proccess(username:string, password:string){
    return this.http.post(this.login,
      {
        username:username,
        password:password,
      })
  }

  //Logout
  logout(){
    this.user.next(null!);
    this.route.navigate(['/login']);
  }

  //GET
  //Get all users
  getAllUsers(){
    return this.http.get(this.getUsers).pipe(map((res) => {
      return res;
    }))
  }

  //Get single user
   getUser(id: number){
    console.log(id);
      return this.http.get(this.getTheUser + id).pipe(map((res) => {
      return res;
    }))
  }

  //POST user
  postUser(data: any){
    //Headers
    const headers = new HttpHeaders();
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.postTheUser, data, {headers: headers}).pipe(map((res) => {
      return res;
    }))
  }

  //PUT user
  updateUser(id: number, data: any){
    console.log(data);
       return this.http.put(this.putUser + id, data).pipe(map((res) => {
      
        return res;
       }))
  }

 
}
