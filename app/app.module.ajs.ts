import { downgradeComponent } from "@angular/upgrade/static";
// import { HomeComponent } from "./home.component";

import * as angular from 'angular'

const MODULE_NAME = 'solitaire';

angular.module(MODULE_NAME, ["klondike", "ngDraggable"]);

// angular.module(MODULE_NAME).directive('home', downgradeComponent({component: HomeComponent} as angular.IDirectiveFactory))

export default MODULE_NAME;