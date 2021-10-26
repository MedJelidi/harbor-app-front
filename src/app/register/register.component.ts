import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: any;
  error = '';
  loading = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  get f(): any { return this.userForm.controls; }

  onSubmit(): void {
    this.error = '';
    this.loading = true;
    if (this.userForm?.value?.username !== null && this.userForm?.value?.email && this.userForm?.value?.password !== null) {
      this.authService.register(this.userForm.value).subscribe(res => {
        console.log(res);
        this.loading = false;
      }, err => {
        this.error = err.error.message;
        console.log(err.error.message);
        this.loading = false;
      });
    }
  }

}
