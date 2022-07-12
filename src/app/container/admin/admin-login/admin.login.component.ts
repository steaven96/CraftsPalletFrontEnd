import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/services/admin-login-service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent {
  loginForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private adminloginService: AdminLoginService
  ) {
    localStorage.setItem('token', 'test');
  }

  get formValidationState() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.createForm();
    //  this.checkRememberMe();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      EMAIL: new FormControl('', [Validators.required, Validators.email]),
      PASSWORD: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      REMEMBER: new FormControl(false),
    });
  }

  checkRememberMe() {
    //  if (this.isBrowser) {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('pass');
    if (!!email) {
      this.loginForm.get('EMAIL')?.setValue(email);
      this.loginForm.get('PASSWORD')?.setValue(password);
      this.loginForm.get('REMEMBER')?.setValue(true);
    }
    // }
  }

  submitLogin() {
    this.submitted = true;
    if (this.loginForm.valid) {
      // this.componentManagerService.loader = true;
      const loginObj = {
        EMAIL: this.loginForm.value.EMAIL,
        PASSWORD: this.loginForm.value.PASSWORD,
        ROLE: 'ADMIN',
      };
      this.adminloginService.getAdminLogin(loginObj).subscribe(
        (res) => {
          console.log('res', res);
        },
        (err) => {
          console.log('err', err);
        }
      );
    }
  }
}
