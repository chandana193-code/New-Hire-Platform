import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JobDescriptionService {

  constructor(private http:HttpClient) { }

getJobDes(){
  return this.http.get<any[]>(`http://localhost:3000/jobs`)
}

}
