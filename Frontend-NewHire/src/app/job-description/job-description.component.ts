import { Component } from '@angular/core';
import { JobDescriptionService } from '../job-description.service';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent {

  jobs: any[] = []

  constructor(private service: JobDescriptionService) { }

  ngOnInit(): void{
    this.get()
  }

  get() {

    this.service.getJobDes().subscribe((data) => {
      this.jobs = data
    })
  }

}
