import { Component,OnInit} from '@angular/core';
import { InterviewService } from '../interview.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent {

  interviews:any[]=[];
   
 
  constructor(private service: InterviewService) {}

  ngOnInit(): void{
    this.get()
  }

get(){
  this.service.get().subscribe((data:any)=>{
    this.interviews=data
  })
}

  }
  
  

  
  
   

 
  



