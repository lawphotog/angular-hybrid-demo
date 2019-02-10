import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NavbarComponent } from './navbar.component';
import { AppComponent } from './app.component';
import { NewPageComponent } from './newpage.component';
import { AppRoutingModule } from './app-routing.module';
import { UrlHandlingStrategy, UrlTree } from '@angular/router';

class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
    shouldProcessUrl(url: UrlTree): boolean {
        return url.toString().lastIndexOf('/ng2', 0) === 0;
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
        NewPageComponent
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