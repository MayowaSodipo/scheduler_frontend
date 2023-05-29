import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  ngOnInit(): void {
    this.getAllUsers();
  }

  status: [] = [];
  tableData: any;

  constructor(
    private userService: UserServiceService,
    private toast: ToastrService
  ) {}
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
  getAllUsers() {
    this.userService.getAll().subscribe({
      next: (res) => {
        this.tableData = res;
        this.status = this.tableData.data.map(
          (item: any) => new Date(item.UserDate) > new Date()
        );
      },
      error: (error) => this.toast.error(error),
    });
  }
  reactiveForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl('', Validators.compose([Validators.required])),
    isAdmin: new FormControl('user', Validators.required),
  });
  onSubmit() {
    if (this.reactiveForm.valid) {
      this.userService.addUser(this.reactiveForm.value).subscribe({
        next: () => {
          this.toast.success('User added successfully');
          this.closeModal();
          this.getAllUsers();
        },
        error: (error) => this.toast.error(error),
      });
    }
  }
}
