import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).{8,}'
          )
        ]
      ],
      confirmPassword: ['', Validators.required]
    },
    { validators: this.passwordMatchValidator }
  );

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}


  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  signup() {
    if (this.signupForm.invalid) return;

    const email = this.signupForm.value.email!;
    const password = this.signupForm.value.newPassword!;

    this.auth.signup({ email, password }).subscribe({
      next: () => {
        this.router.navigate(['/signin']);
      },
      error: () => {
        alert('Signup failed. Email may already exist.');
      }
    });
  }
}