import 'zone.js';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setAngularLib } from '@angular/upgrade/static';
import { AppModule } from './app.module';

declare var angular: any;

setAngularLib(angular);
platformBrowserDynamic().bootstrapModule(AppModule);