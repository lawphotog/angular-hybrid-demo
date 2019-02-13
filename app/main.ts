import 'zone.js';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setAngularLib } from '@angular/upgrade/static';
import { AppModule } from './app.module';
import { angularJsModule } from './app.module.ajs';
import { UIRouter, UrlService } from '@uirouter/core';
import { NgZone } from '@angular/core';
import { visualizer } from '@uirouter/visualizer';

declare var angular: any;

setAngularLib(angular);
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {

    const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;

    // Instruct UIRouter to listen to URL changes
    function startUIRouter() {
      urlService.listen();
      urlService.sync();
    }
  
    platformRef.injector.get<NgZone>(NgZone).run(startUIRouter);
})

angularJsModule.run(['$uiRouter', ($uiRouter) => visualizer($uiRouter) ]);