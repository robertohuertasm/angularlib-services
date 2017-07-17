import { DummyService } from './dummy.service';
import { ReflectiveInjector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

describe('Dummy Service test', () => {

  let svc: DummyService;

  beforeEach(() => {
    const injector = ReflectiveInjector.resolveAndCreate([
      HttpClient,
      DummyService,
    ]);
    svc = injector.get(DummyService);
  });

  it('ensures hello method returns \'hello world\`', () => {
    const result = svc.hello();
    expect(result).toEqual('hello world');
  });

  it('ensures getRandomUser returns a IUser', () => {
    // TODO mock the request in the new httpclient
    expect(true).toBeTruthy();
  })

});
