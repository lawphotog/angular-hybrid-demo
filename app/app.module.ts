import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NavbarComponent } from './navbar.component';
import { AppComponent } from './app.component';
import { NewPageComponent } from './newpage.component';
import { UrlHandlingStrategy, UrlTree } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { angularJsModule } from './app.module.ajs';
import { UIRouterUpgradeModule, NgHybridStateDeclaration } from '@uirouter/angular-hybrid';

class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
    shouldProcessUrl(url: UrlTree): boolean {
        return url.toString().indexOf('/ng2') !== -1;
    }
    extract(url: UrlTree): UrlTree { return url; }
    merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree { return newUrlPart; }
}

export const contactsFutureState: NgHybridStateDeclaration = {
    name: 'newpage',
    url: '/newpage',
    component: NewPageComponent,
  };

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        UIRouterUpgradeModule.forRoot({ states: [contactsFutureState] }),
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        NewPageComponent,
        PageNotFoundComponent
    ],
    // bootstrap: [AppComponent],
    entryComponents: [
    ],
    providers: [
        // { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, [angularJsModule.name], { strictDi: true });
      }
}