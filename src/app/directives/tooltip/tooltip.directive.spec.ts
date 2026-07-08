import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, it, beforeEach, expect } from 'vitest';
import { MockElementRef } from '../highlight/highlight.directive.spec';
import { TooltipDirective } from './tooltip.directive';

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
