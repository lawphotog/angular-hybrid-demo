import { Component } from '@angular/core';

// const template = require('./home.html');

@Component({
    selector: 'newpage',
    template: `
        <div>
            <h1>this is a new page built in angular 7</h1>
        </div>
        `
})
export class NewPageComponent {
    title: string;
    constructor(){
        this.title = 'Awesome, Inc. Internal Ordering System';
    }
}