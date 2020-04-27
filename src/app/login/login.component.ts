import { Component, OnInit } from '@angular/core';
import {ApiService} from '../_services/api.service';
import {Router} from '@angular/router';
import {User} from '../_models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiService : ApiService, private router : Router) { }

  username: string;
  password: string;

  ngOnInit() {
  }

  handleLoginRequest(): void{
    let data = new User();
    data.username = this.username;
    data.password = this.password;
    console.log(data);
    this.apiService.postRequest('/users/signin',data).subscribe(res =>{
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
