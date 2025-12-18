import { Directive, ElementRef, OnInit, effect, inject, input } from '@angular/core';

@Directive({
    selector: '[tooltip]',
    exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {
    public tooltip = input<string>('');

    private tooltipElement = document.createElement('div');
    private visible = false;

    private readonly element = inject(ElementRef);

    constructor() {
        effect(() => {
            this.tooltipElement.textContent = this.tooltip();
        });
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
