import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private snack: MatSnackBar, private login: LoginService, private router: Router) { }

  loginData = {
    username: '',
    password: '',
  };

  formSubmit() {
    if (this.loginData.username.trim() == '' || this.loginData.username == null) {
      this.snack.open('Username is required !!', '', {
        duration: 3000,
      });
      return;
    }

    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snack.open('Password is required !!', '', {
        duration: 3000,
      });
      return;
    }

    //Request server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log("Successfully token generated");
        console.log(data);

        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user: any) => {
            this.login.setUser(user);
            console.log(user);
            //ADMIN : Redirect to admin-dashboard
            //NORMAL : Redirect to normal-dashboard
            if (this.login.getRole() == "ADMIN") {
              //window.location.href = "/admin-dashboard";              
              this.router.navigate(['admin-dashboard'])
              this.login.loginStatusSubject.next(true);
            } else if (this.login.getRole() == "NORMAL") {
              //window.location.href = "/user-dashboard";
              this.router.navigate(['user-dashboard/0'])
              this.login.loginStatusSubject.next(true);
            } else {
              this.login.logout();
            }
          }
        )
      },
      (error) => {
        console.log("Error !!");
        console.log(error);
        this.snack.open('Invalid Details !! Try Again', '', {
          duration: 3000,
        });
      }
    );
  }
}
