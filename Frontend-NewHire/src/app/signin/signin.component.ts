import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  signin() {
    if (this.signinForm.valid) {
      const { email, password } = this.signinForm.value;

      
      this.auth.signin(email, password).subscribe({
        next: (users) => {
          if (users.length > 0) {
            
            localStorage.setItem('user', JSON.stringify(users[0]));
            alert('sign in Successful!');
            this.router.navigate(['/home']); 
          } else {
            alert('Invalid email or password');
          }
        },
        error: (err) => {
          console.error('Login error:', err);
          alert('Something went wrong. Check console.');
        }
      });
    }
  }
}