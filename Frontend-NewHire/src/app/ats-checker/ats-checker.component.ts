import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AtsService } from '../ats.service';

@Component({
  selector: 'app-ats-checker',
  templateUrl: './ats-checker.component.html',
  styleUrls: ['./ats-checker.component.css']
})
export class AtsCheckerComponent {

  atsForm!: FormGroup;
  uploadedFileName: string = '';
  score: number = 0;        // actual score
  displayScore: number = 0; // for circle animation
  fileContent: string = ''; // text content of resume

  // Keywords for each job
  jobKeywords: { [key: string]: string[] } = {
    "Frontend Developer": ["html", "css", "javascript", "angular", "react", "ui"],
    "Backend Developer": ["node.js", "express", "mongodb", "sql", "api", "server"]
  };

  constructor(private fb: FormBuilder, private atsService: AtsService) {
    this.atsForm = this.fb.group({
      jobTitle: [''],
      file: [null]
    });
  }

  // File selected
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadedFileName = file.name;
      this.atsForm.patchValue({ file: file });
      this.score = 0;
      this.displayScore = 0;

      const reader = new FileReader();
      reader.onload = () => {
        this.fileContent = reader.result as string;
      };
      reader.readAsText(file); // read file as text
    }
  }

  uploadResume() {
    if (!this.uploadedFileName || !this.atsForm.get('jobTitle')?.value) {
      alert('Please select a job and a file.');
      return;
    }

    this.calculateScore(this.fileContent);
  }

  calculateScore(text: string) {
    const jobTitle = this.atsForm.get('jobTitle')?.value;
    const keywords = this.jobKeywords[jobTitle] || [];

    const textLower = text.toLowerCase();

    // Count matched keywords
    const matchedKeywords = keywords.filter(word => textLower.includes(word.toLowerCase()));

    this.score = keywords.length > 0 ? Math.round((matchedKeywords.length / keywords.length) * 100) : 0;

    // Animate the circle and percentage
    this.animateScore();

    // Save to JSON backend
    this.saveToDb();
  }

  animateScore() {
    this.displayScore = 0;
    const interval = setInterval(() => {
      if (this.displayScore < this.score) {
        this.displayScore++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  }

  saveToDb() {
    const record = {
      jobTitle: this.atsForm.get('jobTitle')?.value,
      fileName: this.uploadedFileName,
      score: this.score
    };

    this.atsService.saveAtsRecord(record).subscribe({
      next: () => console.log('Saved successfully!'),
      error: (err) => console.error(err)
    });

    // Reset form fields but keep circle visible
    this.atsForm.patchValue({ jobTitle: '', file: null });
    this.uploadedFileName = '';
    this.fileContent = '';
  }
}
