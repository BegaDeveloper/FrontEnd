import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  //Logout
  onLogout(){
    this.http.logout();
  }

}
