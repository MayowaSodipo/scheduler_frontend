import { Component, OnInit } from '@angular/core';
import { dashboardRoutes } from '../dashboardRoutes.interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service';
import { roleGuard } from 'src/app/Guard/role.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private route: Router, private authService: AuthService) {}
  currentRoute: string = '';
  role: boolean = true;
  ngOnInit(): void {
    this.currentRoute = this.route.url;
    this.role = this.authService.userData().role == 'admin';
    console.log(this.role);
  }
  logOut() {
    this.authService.logOut();
  }

  dashboardRoutes: dashboardRoutes[] = [
    { title: 'Dashboard', path: '/dashboard', icon: 'Grid', role: true },
    {
      title: 'Appointments',
      path: '/dashboard/appointments',
      icon: 'Calendar',
      role: true,
    },
    {
      title: 'Users',
      path: '/dashboard/users',
      icon: 'user',
      role: this.role,
    },
    {
      title: 'Settings',
      path: '/dashboard/settings',
      icon: 'settings',
      role: true,
    },
  ];
}
