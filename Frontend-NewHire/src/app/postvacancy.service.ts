import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostVacancyService {

  private apiUrl = 'http://localhost:3000/jobs';

  constructor(private http: HttpClient) {}

  postJob(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}