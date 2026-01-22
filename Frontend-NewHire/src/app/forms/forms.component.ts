import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface FormSubmission {
  formName: string;
  description: string;
  status: string;
  stepNumber: number;
}

@Component({
  selector: 'app-forms',   // ✅ USE THIS selector in HTML
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  currentStep = 1;
  isFormComplete = false;

  personalInfoForm!: FormGroup;
  educationForm!: FormGroup;
  declarationForm!: FormGroup;

  submittedForms: FormSubmission[] = [];

  steps = [
    { id: 1, name: 'Personal Information', completed: false },
    { id: 2, name: 'Education Details', completed: false },
    { id: 3, name: 'Candidate Declaration', completed: false }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForms();
  }

  initializeForms(): void {
    this.personalInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });

    this.educationForm = this.fb.group({
      degree: ['', Validators.required],
      institution: ['', Validators.required],
      graduationYear: ['', Validators.required],
      gpa: ['', Validators.required],
      fieldOfStudy: ['', Validators.required]
    });

    this.declarationForm = this.fb.group({
      agreed: [false, Validators.requiredTrue],
      signature: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  getCurrentForm(): FormGroup {
    if (this.currentStep === 1) return this.personalInfoForm;
    if (this.currentStep === 2) return this.educationForm;
    return this.declarationForm;
  }

  nextStep(): void {
    const currentForm = this.getCurrentForm();

    if (currentForm.valid) {
      this.steps[this.currentStep - 1].completed = true;

      if (this.currentStep < this.steps.length) {
        this.currentStep++;
      } else {
        this.submitAllForms();
      }
    } else {
      this.markFormGroupTouched(currentForm);
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submitAllForms(): void {
    this.submittedForms = [
      {
        formName: 'Personal Information Form',
        description: `${this.personalInfoForm.value.firstName} ${this.personalInfoForm.value.lastName}`,
        status: 'Submitted',
        stepNumber: 1
      },
      {
        formName: 'Education Details Form',
        description: `${this.educationForm.value.degree} - ${this.educationForm.value.institution}`,
        status: 'Submitted',
        stepNumber: 2
      },
      {
        formName: 'Candidate Declaration Form',
        description: `Signed by ${this.declarationForm.value.signature}`,
        status: 'Submitted',
        stepNumber: 3
      }
    ];

    this.isFormComplete = true;
  }

  editForm(stepNumber: number): void {
    this.currentStep = stepNumber;
    this.isFormComplete = false;
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  isStepCompleted(stepId: number): boolean {
    return this.steps[stepId - 1].completed;
  }

  isStepCurrent(stepId: number): boolean {
    return this.currentStep === stepId;
  }
}
