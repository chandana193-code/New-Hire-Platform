import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor() { }

  forms=[
    {name:"Candidate Declaration Form",section:1,editable:false,status:"submitted"},
    {name:"Personal Information Form",section:2,editable:true,status:"pending"},
    {name:"Education Details Form",section:3,editable:false,status:"submitted"}

  ]

  getAllForms(){
    return this.forms;
  }

  getForm(index:number){
    return this.forms[index];
  }
}
