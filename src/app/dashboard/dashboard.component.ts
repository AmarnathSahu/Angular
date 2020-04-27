import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService :ApiService) { }

  ngOnInit() {
  }

  getAllUsers(): void {
    this.apiService.getRequst('/users/getAllUsers').subscribe(res => {
      console.log(res);
    })
  }

}
