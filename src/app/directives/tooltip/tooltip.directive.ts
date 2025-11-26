import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';

@Directive({
    selector: '[tooltip]',
    exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {
    private tooltipElement = document.createElement('div');
    private visible = false;

    private readonly element = inject(ElementRef);

    @Input()
    set tooltip(value: string) {
        this.tooltipElement.textContent = value;
    }

    ngOnInit(): void {
        this.tooltipElement.className = 'tooltip';
        this.element.nativeElement.appendChild(this.tooltipElement);
        this.element.nativeElement.classList.add('tooltip-container');
    }

    public hide(): void {
        this.tooltipElement.classList.remove('tooltip--active');
        this.visible = false;
    }

    public show(): void {
        this.tooltipElement.classList.add('tooltip--active');
        this.visible = true;
    }

    public getVisible(): boolean {
        return this.visible;
    }
}
