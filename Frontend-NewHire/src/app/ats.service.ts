import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtsService {

  private apiUrl = 'http://localhost:3001/ats';

  constructor(private http: HttpClient) {}

  saveAtsRecord(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
