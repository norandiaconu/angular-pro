import { TestBed } from '@angular/core/testing';
import { TooltipDirective } from './tooltip.directive';
import { ElementRef } from '@angular/core';
import { MockElementRef } from '../highlight/highlight.directive.spec';

describe('TooltipDirective', () => {
    let directive: TooltipDirective;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TooltipDirective, { provide: ElementRef, useClass: MockElementRef }]
        });
        directive = TestBed.inject(TooltipDirective);
    });

    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });

    it('should show', () => {
        directive.show();
        expect(directive['tooltipElement'].classList.contains('tooltip--active')).toBeTruthy();
        expect(directive['visible']).toBeTruthy();
    });

    it('should hide', () => {
        directive.hide();
        expect(directive['tooltipElement'].classList.contains('tooltip--active')).toBeFalsy();
        expect(directive['visible']).toBeFalsy();
    });
});
