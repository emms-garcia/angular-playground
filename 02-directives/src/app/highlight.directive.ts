import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

    @HostListener('mouseenter') mouseover() {
        this.backgroundColor = this.highlightColor;
    };

    @HostListener('mouseleave') mouseleave() {
        this.backgroundColor = this.defaultColor;
    };

    @HostBinding('style.backgroundColor') get setColor() {
        return this.backgroundColor;
    };

    @Input() defaultColor: string = 'white';
    @Input('highlight') highlightColor: string = 'green';
    private backgroundColor: string;

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
    }
}
