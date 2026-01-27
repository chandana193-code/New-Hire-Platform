import { Component } from '@angular/core';

import { InterviewScheduleService } from '../interview-schedule.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-interview-schedule',
  templateUrl: './interview-schedule.component.html',
  styleUrls: ['./interview-schedule.component.css']
})
export class InterviewScheduleComponent{

  interviewForms!:FormGroup;

  interviews: any[]=[]
 


  constructor(private fb: FormBuilder,private service:InterviewScheduleService) {
  
    this.interviewForms = this.fb.group({
      round: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      duration: ['', Validators.required],
      attendance: ['', Validators.required],
      status: ['', Validators.required],
      experience: ['']
    });
   
  }


  
  

  save(){
    if (this.interviewForms.invalid) {
    this.interviewForms.markAllAsTouched(); 
    return; 
    
   
  }

   this.service.send(this.interviewForms.value).subscribe(() => {
    this.get();                 
    this.interviewForms.reset(); 
  });

   
  }
get(){
  this.service.get().subscribe((data:any)=>{
    this.interviews=data
  })
}
del(id:any){
  this.service.deleteData(id).subscribe(()=>{
    this.get()
  })
}
}



