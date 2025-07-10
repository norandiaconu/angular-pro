import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';

@Directive({
    selector: '[tooltip]',
    exportAs: 'tooltip',
    standalone: true
})
export class TooltipDirective implements OnInit {
    tooltipElement = document.createElement('div');
    visible = false;

    private element = inject(ElementRef);

    @Input()
    set tooltip(value: string) {
        this.tooltipElement.textContent = value;
    }

    ngOnInit(): void {
        this.tooltipElement.className = 'tooltip';
        this.element.nativeElement.appendChild(this.tooltipElement);
        this.element.nativeElement.classList.add('tooltip-container');
    }

    hide(): void {
        this.tooltipElement.classList.remove('tooltip--active');
        this.visible = false;
    }

    show(): void {
        this.tooltipElement.classList.add('tooltip--active');
        this.visible = true;
    }

    getVisible(): boolean {
        return this.visible;
    }
}
