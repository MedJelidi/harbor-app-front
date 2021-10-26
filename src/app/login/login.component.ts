import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: any;
  error = '';
  loading = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  get f(): any { return this.userForm.controls; }

  onSubmit(): void {
    this.error = '';
    this.loading = true;
    if (this.userForm?.value?.username !== null && this.userForm?.value?.password !== null) {
      this.authService.login(this.userForm.value).subscribe(res => {
        console.log(res);
        this.authService.setLoggedIn(true);
        this.loading = false;
        this.router.navigate(['/dashboard']).then();
      }, err => {
        this.error = err.error.message;
        console.log(err.error.message);
        this.loading = false;
      });
    }
  }

}
