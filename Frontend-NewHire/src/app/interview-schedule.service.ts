import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewScheduleService {

 

  constructor(private http: HttpClient) {}

    send(interviews:any){
    return this.http.post('http://localhost:3000/interview',interviews)
  }
  get(){
    return this.http.get('http://localhost:3000/interview')
  }
  deleteData(id:any){
    return this.http.delete(`http://localhost:3000/interview/${id}`)
  }
}
