import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  //Get Current User
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`);
  }

  //Generate Token
  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  public loginUser(token: any) {
    localStorage.setItem("token", token);
    return true;
  }

  //isLoggenIn : user is login or not
  public isLoggenIn(){
    let tokenStr = localStorage.getItem("token");
    return tokenStr == undefined || tokenStr == null || tokenStr == '' ? false : true;
  }

  //logout : remove token from local storage
  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //Get token
  public getToken(){
    return localStorage.getItem("token");
  }

  //Set user
  public setUser(user : any){
    localStorage.setItem("user", JSON.stringify(user));
  }

  //Get user
  public getUser(){
    let userStr = localStorage.getItem("user");
    if(userStr != null){
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  //Get role
  public getRole(){
    let user = this.getUser();
    return user != null ? user.authorities[0].authority : null;
  }
}
