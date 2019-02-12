import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NavbarComponent } from './navbar.component';
import { AppComponent } from './app.component';
import { NewPageComponent } from './newpage.component';
import { AppRoutingModule } from './app-routing.module';
import { UrlHandlingStrategy, UrlTree } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
    shouldProcessUrl(url: UrlTree): boolean {
        return url.toString().indexOf('/ng2') !== -1;
    }
    extract(url: UrlTree): UrlTree { return url; }
    merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree { return newUrlPart; }
}

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        NewPageComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent],
    entryComponents: [
    ],
    providers: [
        { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
    ]
})
export class AppModule {
    constructor() { }
}