import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../models/user';

@Injectable()
export class DummyService {

  constructor(private http: Http)  { }

  public hello() {
    return 'hello world';
  }

  public getRandomUser(): Observable<IUser> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${Math.round(Math.random() * 10)}`).map(x => x.json());
  }
}
