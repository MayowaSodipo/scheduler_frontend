import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from 'src/app/service/appointment.service';
import { getRelativeDate } from 'src/utilities/relativeDate';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styles: [],
})
export class AppointmentsComponent implements OnInit {
  ngOnInit(): void {
    this.getAllAppointments();
  }

  status: [] = [];
  tableData: any;

  constructor(
    private appointmentService: AppointmentService,
    private toast: ToastrService
  ) {}
  isModalOpen = false;
  getDate(date: string) {
    return getRelativeDate(date);
  }
  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
  getAllAppointments() {
    this.appointmentService.getAll().subscribe({
      next: (res) => {
        this.tableData = res;
        this.status = this.tableData.data.map(
          (item: any) => new Date(item.appointmentDate) > new Date()
        );
      },
      error: (error) => this.toast.error(error),
    });
  }
  reactiveForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    appointmentDate: new FormControl(new Date(), Validators.required),
  });
  onSubmit() {
    if (this.reactiveForm.valid) {
      this.appointmentService
        .addAppointment(this.reactiveForm.value)
        .subscribe({
          next: () => {
            this.toast.success('Appointment added successfully');
            this.closeModal();
            this.getAllAppointments();
          },
          error: (error) => this.toast.error(error),
        });
    }
  }
}
