import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private server = "https://localhost:7063"

  // API -( call )-> UsersController
  public register(data:any) {
    let _api = "api/users/register"
    return this.http.post(`${this.server}/${_api}`, data)
  }

  public login(data:any) {
    let _api = "api/users/login"
    return this.http.post(`${this.server}/${_api}`, data)
  }
}
