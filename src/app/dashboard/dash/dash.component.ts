import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service';
import { dashboardHomeDetails, response } from './dash.interface';
import { AppointmentService } from 'src/app/service/appointment.service';
import { getRelativeDate } from 'src/utilities/relativeDate';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
})
export class DashComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private appointmentService: AppointmentService
  ) {}
  tableData: any;
  username: string = '';
  ngOnInit(): void {
    this.username = this.authService.userData().name;
    this.appointmentService.getAll().subscribe({
      next: (res) => {
        this.tableData = res;
      },
      error: (error) => console.log(error),
    });
  }
  getDate(date: string) {
    return getRelativeDate(date);
  }
  dashboardHomeDetails: dashboardHomeDetails[] = [
    { title: 'All Appointments', color: '#ED6A5A', count: 0, icon: 'Calendar' },
    {
      title: 'Fulfilled Appointments',
      color: '#27FB6B',
      count: 0,
      icon: 'check-circle',
    },
    {
      title: 'Canceled Appointments',
      color: '#ED2B2A',
      count: 0,
      icon: 'x-circle',
    },
    {
      title: 'Undone Appointments',
      color: '#232ED1',
      count: 0,
      icon: 'shopping-bag',
    },
  ];
}
