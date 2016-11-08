import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  Input,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements Component, AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit {
  @Input() bindable = 1000;

  @ContentChild('boundContent') boundContent;
  @ViewChild('boundParagraph') boundParagraph;

  constructor() { }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
    console.log(this.boundContent);
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
    console.log(this.boundParagraph);
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
