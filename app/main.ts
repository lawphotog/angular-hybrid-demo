import 'zone.js';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setAngularLib, UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app.module';
import { PlatformRef } from '@angular/core';
import moduleName from './app.module.ajs';

declare var angular: any;

setAngularLib(angular);
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.documentElement, [moduleName]);
})