import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    template: `
        <div>
            <a href='#board'>Game</a>
            <a href="#newpage">NewPage</a>
            <a ui-sref="board">Game</a>
            <a ui-sref="newpage">New Page</a>
        </div>
        `
})
export class NavbarComponent {
    title: string;
    constructor(){
        this.title = 'Awesome, Inc. Internal Ordering System';
    }
}