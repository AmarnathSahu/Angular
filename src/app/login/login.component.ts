import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Router } from '@angular/router';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  username: string;
  password: string;

  ngOnInit() {
  }

  handleLoginRequest(): void {
    let data = new User();
    data.username = this.username;
    data.password = this.password;
    console.log(data);
    this.apiService.postRequest('/users/signin', data).subscribe(res => {
      var tokenString = res.tokenType + " " + res.accessToken;
      sessionStorage.setItem("token", tokenString);
      this.router.navigate(['/dashboard']);
    })
  }

  changeToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
