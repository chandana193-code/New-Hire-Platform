import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
  forms:any[]=[];

  constructor(private formservice:FormServiceService){}

  ngOnInit(): void {
    this.forms=this.formservice.getAllForms();
    
  }

}