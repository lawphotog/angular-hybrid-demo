import { Component } from '@angular/core';

// const template = require('./home.html');

@Component({
    selector: 'navbar',
    template: `
        <div>
            <a href='#board'>Game</a>
            <a [routerLink]="['/ng2/newpage']">NewPage</a>
        </div>
        `
})
export class NavbarComponent {
    title: string;
    constructor(){
        this.title = 'Awesome, Inc. Internal Ordering System';
    }
}