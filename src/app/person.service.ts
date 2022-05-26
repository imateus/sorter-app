import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from './person/person';
import { PersonPage } from './person/personPage';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url: string = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

  save(person: Person) : Observable<Person>{
    return this.http.post<Person>(this.url, person);
  }

  list(page: any, size: any) : Observable<PersonPage> {
    const params = new HttpParams()
    .set('page', page)
    .set('size', size)
    return this.http.get<any>(`${this.url}?${params.toString()}`);
  }

  favorite(person: Person) : Observable<any> {
    return this.http.patch( `${this.url}/${person.id}/active`, null)
  }

  upload(person: Person, formData: FormData) : Observable<any>{
    return this.http.put( `${this.url}/${person.id}/picture`, formData, { responseType : 'blob'})
  }
}
