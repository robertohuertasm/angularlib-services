import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DummyService } from './services/dummy.service';

import 'rxjs/add/operator/map';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyServiceModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyServiceModule,
      providers: [
        DummyService,
      ],
    }
  }

  constructor( @Optional() @SkipSelf() parentModule: MyServiceModule) {
    if (parentModule) {
      throw new Error('MyServiceModule is already loaded. Import it in the AppModule only.');
    }
  }
}
