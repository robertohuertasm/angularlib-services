import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DummyService } from './services/dummy.service';

import 'rxjs/add/operator/map';

@NgModule({
  imports: [
    HttpModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyServicesModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyServicesModule,
      providers: [
        DummyService,
      ],
    }
  }

  constructor( @Optional() @SkipSelf() parentModule: MyServicesModule) {
    if (parentModule) {
      throw new Error('MyServiceModule is already loaded. Import it in the AppModule only.');
    }
  }
}
