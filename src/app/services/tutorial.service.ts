import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://127.0.0.1:8000/api/v1/employees/';
const P_Url = 'http://127.0.0.1:8000/api/v1/employees/';


@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  get(id: any) {
    return this.http.get(`${P_Url}${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${P_Url}${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${P_Url}${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByfirst_name(val: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${P_Url}${val}`);
  }
}
