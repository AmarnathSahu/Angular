import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const ApiUrl = environment.url;

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }


  public getRequst(path): Observable<any> {
    return this.http.get(ApiUrl+path);
  }

  public postRequest(path, data): Observable<any> {
    return this.http.post(ApiUrl+path, data)
  }
}
