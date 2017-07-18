import { Component } from '@angular/core';
import { DummyService } from 'angular-service-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private svc: DummyService) {
    this.title =  `Your own ${svc.hello()}`;
  }
}
