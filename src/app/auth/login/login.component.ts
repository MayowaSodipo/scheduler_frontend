import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    localStorage.clear();
  }
  constructor(
    private authService: AuthService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  responseData: any;
  errorData: any;
  Login(loginData: any) {
    if (loginData.valid) {
      this.authService.Login(loginData.value).subscribe({
        next: (response) => {
          this.responseData = response;
          localStorage.setItem('data', JSON.stringify(this.responseData.data));
          this.route.navigate(['/dashboard']);
          this.toastr.success('Login Successful');
        },
        error: (error) => {
          this.toastr.error(error);
          this.errorData = error;
        },
      });
    }
  }
}
