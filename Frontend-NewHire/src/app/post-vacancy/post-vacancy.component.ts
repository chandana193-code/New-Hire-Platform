import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostVacancyService } from '../postvacancy.service';

@Component({
  selector: 'app-post-vacancy',
  templateUrl: './post-vacancy.component.html',
  styleUrls: ['./post-vacancy.component.css']
})
export class PostVacancyComponent implements OnInit {

  
  postJobForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private jobService: PostVacancyService
  ) {}

  ngOnInit(): void {
    this.postJobForm = this.fb.group({
      jobTitle: ['', Validators.required],
      location: ['', Validators.required],
      companyName: ['', Validators.required],
      experience: ['', Validators.required],
      positions: [1, [Validators.required, Validators.min(1)]],
      jobDescription: ['', Validators.required],
      aboutCompany: ['', Validators.required]
    });
  }

  submitJob(): void {
    if (this.postJobForm.valid) {
      this.jobService.postJob(this.postJobForm.value).subscribe({
        next: () => {
          alert('Job Posted Successfully');
          this.postJobForm.reset();
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    } else {
      this.postJobForm.markAllAsTouched();
    }
  }
}
