import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment.service';
import { getRelativeDate } from 'src/utilities/relativeDate';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
})
export class AppointmentDetailsComponent implements OnInit {
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.getAppointment(this.id);
  }
  appointmentDetails: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private appointmentService: AppointmentService,
    private toast: ToastrService,
    private router: Router
  ) {}
  id: string = '';
  status: boolean = false;
  isOpen: boolean = false;
  closeModal() {
    this.isOpen = false;
  }
  openModal() {
    this.isOpen = true;
  }
  getDate(date: string) {
    return getRelativeDate(date);
  }

  getAppointment(id: string) {
    this.appointmentService.getAppointmentById(id).subscribe({
      next: (res) => (this.appointmentDetails = res.data),
      error: (err) => this.toast.error(err),
    });
  }
  deleteAppointment(id: string) {
    this.appointmentService.deleteAppointment(id).subscribe({
      next: (res) => {
        this.appointmentDetails = res.data;
        this.toast.success('Appointment Deleted');
        if (res) this.router.navigate(['/dashboard/appointments']);
      },
      error: (err) => this.toast.error(err),
    });
  }
}
