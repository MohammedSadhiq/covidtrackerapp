import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(private http: HttpClient) { }

  inddatalat():Observable<any>{
    return this.http.get('https://api.rootnet.in/covid19-in/stats/latest');
  }

  indHist():Observable<any>{
    return this.http.get('https://api.rootnet.in/covid19-in/stats/history');
  }

  testHist():Observable<any>{
  return this.http.get('https://api.rootnet.in/covid19-in/stats/testing/history');
  }

  contacts():Observable<any>{
    return this.http.get('https://api.rootnet.in/covid19-in/contacts');
  }
}
