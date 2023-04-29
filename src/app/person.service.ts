import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Person } from './model/person';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personsUrl1: string;
  private personsUrl2: string;
  private personsUrl3: string;
  constructor(private http: HttpClient) {
    this.personsUrl1 = 'http://localhost:8080/persons';
    this.personsUrl2 = 'http://localhost:8080/getage';
    this.personsUrl3 = 'http://localhost:8080/getmaxaged';
  }

  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl1);
  }

  public getAge(name: string): Observable<number> {
    const params = new HttpParams()
      .set("name", name);
    return this.http.get<number>(this.personsUrl2, {params: params});
  }

  public getMaxAged(): Observable<Person> {
    return this.http.get<Person>(this.personsUrl3);
  }
}
