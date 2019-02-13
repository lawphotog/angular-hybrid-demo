import { downgradeComponent } from "@angular/upgrade/static";
// import { HomeComponent } from "./home.component";

import * as angular from 'angular'
import uiRouter from "@uirouter/angularjs";
import { upgradeModule } from "@uirouter/angular-hybrid";

const MODULE_NAME = 'solitaire';

export const angularJsModule = angular.module(MODULE_NAME, [uiRouter, upgradeModule.name, "klondike", "ngDraggable"]);

// angular.module(MODULE_NAME).directive('home', downgradeComponent({component: HomeComponent} as angular.IDirectiveFactory))

const traceRunBlock = ['$trace', $trace => { $trace.enable(1); }];
angularJsModule.run(traceRunBlock);
