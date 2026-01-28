import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessdataService {

  constructor(private http:HttpClient) {}

  save(data:any){
    return this.http.post('http://localhost:3000/message',data)
  }

  get(){
    return this.http.get('http://localhost:3000/message')
  }

  del(id: any){
    return this.http.delete(`http://localhost:3000/message/${id}`)
  }

  } 

