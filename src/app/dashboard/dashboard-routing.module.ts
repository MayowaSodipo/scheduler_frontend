import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from '../Guard/auth.guard';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DashComponent } from './dash/dash.component';
import { ErrorComponent } from '../error/error.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { UserComponent } from './user/user.component';
import { roleGuard } from '../Guard/role.guard';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: DashComponent },
      {
        path: 'appointments',
        component: AppointmentsComponent,
      },
      { path: 'appointments/:id', component: AppointmentDetailsComponent },
      { path: 'users', component: UserComponent, canActivate: [roleGuard] },
      {
        path: 'users/:id',
        component: UserDetailsComponent,
        canActivate: [roleGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
