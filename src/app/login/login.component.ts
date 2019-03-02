import { Component, OnInit } from '@angular/core';
import {ApiService} from '../_services/api.service';
import {Router} from '@angular/router';
import {User} from './../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiService : ApiService, private router : Router) { }

  ngOnInit() {
  }

  handleLoginRequest(): void{
    let data = new User();
    data.username = 'saurav12';
    data.password = 'teqforce!1';
    this.apiService.postRequest('/users/signin',data).subscribe(res =>{
      debugger
      console.log(res);
    })
  }
  
  changeToDashboard(): void {
   this.router.navigate(['/dashboard']);
  }

  getAllUsers(): void{
    this.apiService.getRequst('/users/getAllUsers').subscribe(res =>{
      console.log(res);
    })
  }

}
