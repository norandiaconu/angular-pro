import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
    selector: '[highlight]',
    standalone: true
})
export class HighlightDirective {
    private el = inject(ElementRef);

    constructor() {
        this.el.nativeElement.style.backgroundColor = 'yellow';
        this.el.nativeElement.style.color = 'red';
    }
}
