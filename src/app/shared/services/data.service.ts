import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = './assets/profile.json';
  constructor(private http: HttpClient) {
   }

  public getProfileInfo(): Observable<any> {
    return this.http.get(this.url);
  }
}
