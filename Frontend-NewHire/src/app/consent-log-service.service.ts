import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsentLogServiceService {

  private apiUrl = '/api/consent-log'; // backend API

  constructor(private http: HttpClient) {}

  getConsentLogs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
