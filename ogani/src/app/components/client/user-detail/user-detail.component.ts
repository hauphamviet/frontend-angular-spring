import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

  username: any;
  user: any;

  changePassword: boolean = false;

  updateForm: any = {
    firstname: null,
    lastname: null,
    email: null,
    country: null,
    state: null,
    address: null,
    phone: null
  }

  changePasswordForm: any = {
    oldPassword: null,
    newPassword: null
  }

  constructor() { }

  ngOnInit(): void {

  }

  updateProfile() {
    const{firstname, lastname, email, state, address, phone} = this.updateForm;
    
  }

  showChangePassword() {
    this.changePassword = true;
  }

}
