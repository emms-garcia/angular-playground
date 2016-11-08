import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
        <p #boundContent>{{test}}</p>
    </fa-lifecycle>
    <button (click)="delete = true">Click to Delete</button>
    <button (click)="test = 'Changed value'">Click to Change</button>
    <button (click)="boundValue = 2000">Click to Bound Value</button>
  `
})
export class AppComponent {
    delete = false;
    test = 'Starting value';
    boundValue = 1000
}
