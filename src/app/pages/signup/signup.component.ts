import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userService : UserService, private snackBar : MatSnackBar, private login : LoginService) {}

  public user = {
    username : '',
    password : '',
    firstname : '',
    lastname : '',
    email : '',
    phone : ''
  };

  formSubmit() {
    if(this.user.username == null || this.user.username == '') {
      this.snackBar.open(`Username can't be null/empty`, 'ok', {
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    if(this.user.password == null || this.user.password == '') {
      this.snackBar.open(`Password can't be null/empty`, 'ok', {
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    if(this.user.firstname == null || this.user.firstname == '') {
      this.snackBar.open(`Firstname can't be null/empty`, 'ok', {
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    if(this.user.lastname == null || this.user.lastname == '') {
      this.snackBar.open(`Lastname can't be null/empty`, 'ok', {
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    if(this.user.email == null || this.user.email == '') {
      this.snackBar.open(`Email can't be null/empty`, 'ok', {
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    if(this.user.phone == null || this.user.phone == '') {
      this.snackBar.open(`Phone No can't be null/empty`, 'ok', {
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    
    
        this.userService.addUser(this.user).subscribe(
          (data:any) => {
            //success
            swal.fire("Successfully Registered !!", 'User id : ' + data.id, 'success');
          },
          (error) => {
            console.log(error);
            this.snackBar.open(error.error, '', {
              duration: 3000,
            });
          }          
        );    
  }
}
