import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { IconsModule } from '../icons/icons.module';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DashComponent } from './dash/dash.component';
import { ButtonComponent } from '../components/button/button.component';
import { ModalComponent } from '../components/modal/modal.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HomeComponent,
    AppointmentsComponent,
    DashComponent,
    ModalComponent,
    AppointmentDetailsComponent,
    UserComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IconsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
