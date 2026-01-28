import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessdataService } from '../messdata.service';

@Component({
  selector: 'app-messdata',
  templateUrl: './messdata.component.html',
  styleUrls: ['./messdata.component.css']
})
export class MessdataComponent {
  messageForm!:FormGroup;
  data:any;


  constructor(private fb:FormBuilder,private service:MessdataService){
    this.messageForm=this.fb.group({
    date: new FormControl('',Validators.required),
    time: new FormControl('',Validators.required),
    sub: new FormControl('',Validators.required)
  });
}

  // submit(){
  //   if(this.messageForm.valid){
  //     alert("Message Updated")
  //   }
  //   else{
  //     alert("Fill all the fields")
  //     return
  //   }

  //   this.service.save(this.messageForm.value).subscribe(()=>{
  //     this.getData()
  //   })
  // }





  submit() {
  if (this.messageForm.invalid) {
    alert("Fill all the fields");
    return;   
  }

  this.service.save(this.messageForm.value).subscribe(() => {
    alert("Message Updated");
    this.getData();
    this.messageForm.reset(); 
  });
}


  getData(){
    this.service.get().subscribe((response)=>{
      this.data=response
    })
  }

  del(id:any){
    this.service.del(id).subscribe(()=>{
      this.getData()
    })

  
}


}