import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../models/user';

@Injectable()
export class DummyService {

  constructor(private http: HttpClient)  { }

  public hello() {
    return 'hello world';
  }

  public getRandomUser(): Observable<IUser> {
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${Math.round(Math.random() * 10)}`);
  }
}
