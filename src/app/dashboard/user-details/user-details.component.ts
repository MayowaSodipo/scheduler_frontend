import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/service/user-service.service';
import { getRelativeDate } from 'src/utilities/relativeDate';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnInit {
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.getuser(this.id);
  }
  userDetails: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserServiceService,
    private toast: ToastrService,
    private router: Router
  ) {}
  id: string = '';
  status: [] = [];
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

  getuser(id: string) {
    this.userService.getUserById(id).subscribe({
      next: (res) => {
        this.userDetails = res.data;
        this.status = this.userDetails.data.map(
          (item: any) => new Date(item.appointmentDate) > new Date()
        );
      },
      error: (err) => this.toast.error(err),
    });
  }
}
