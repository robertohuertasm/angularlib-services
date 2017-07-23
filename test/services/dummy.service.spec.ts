import { DummyService } from '../../src/services/dummy.service';
import { ReflectiveInjector } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { fakeAsync, tick } from '@angular/core/testing';
import { IUser } from '../../src/models/user';

describe('Dummy Service test', () => {

  let svc: DummyService;
  let backend: any;
  let connection: MockConnection;

  beforeEach(() => {
    const injector = ReflectiveInjector.resolveAndCreate([
      { provide: ConnectionBackend, useClass: MockBackend },
      { provide: RequestOptions, useClass: BaseRequestOptions },
      Http,
      DummyService,
    ]);
    svc = injector.get(DummyService);
    backend = injector.get(ConnectionBackend);
    backend.connections.subscribe(conn => {
      connection = conn;
    });
  });

  it('ensures hello method returns \'hello world\`', () => {
    const result = svc.hello();
    expect(result).toEqual('hello world');
  });

  it('ensures getRandomUser returns a IUser', fakeAsync(() => {
    // TODO mock the request
    let response: IUser;
    svc.getRandomUser().subscribe(x => response = x);
    const mockUser: IUser = {
      id: 1,
      username: 'test',
      email: 'test@test.com',
      address: {
        street: 'test-street',
        suite: 'test-suite',
        city: 'test-city',
        zipcode: 'test-zipcode',
        geo: {
          lat: 1234,
          lng: 2341,
        },
      },
      phone: '12345',
      website: 'http://test.com',
      company: {
        name: 'Valudio',
        catchPrase: '',
        bs: '',
      },
    };
    connection.mockRespond(new Response(new ResponseOptions({
      body: mockUser,
    })))
    tick();
    expect(connection).toBeDefined();
    expect(response).toEqual(mockUser);
    expect(true).toBeTruthy();
  }));

});
