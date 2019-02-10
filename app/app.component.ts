import { Component } from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
    <home></home>
    <div class="ng-view"></div>
  `
})
export class AppComponent {}