import { Component } from '@angular/core';

// const template = require('./home.html');

@Component({
    selector: 'home',
    template: `
        <div>Hello</div>
        `
})
export class HomeComponent {
    title: string;
    constructor(){
        this.title = 'Awesome, Inc. Internal Ordering System';
    }
}