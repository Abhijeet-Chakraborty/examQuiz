import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedIn = false;
  user:any = null;

  constructor(public login: LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggenIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn = this.login.isLoggenIn();
      this.user = this.login.getUser().username;
    })    
  }



  public logout() {
    this.login.logout();
    window.location.reload();
  }
}
