import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  response: any;
  constructor(private authService: AuthService, private toast: ToastrService) {}
  Register(registerData: any) {
    if (registerData.valid) {
      this.authService.Register(registerData.value).subscribe({
        next: (res) => this.toast.success('Registration Successful'),
        error: (err) => this.toast.error(err),
      });
    }
  }
}
