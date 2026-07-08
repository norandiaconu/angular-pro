import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, it, beforeEach, expect } from 'vitest';
import { HighlightDirective } from './highlight.directive';

export class MockElementRef extends ElementRef {
    override nativeElement = {
        style: {
            backgroundColor: 'red',
            color: 'yellow'
        }
    };
}

describe('HighlightDirective', () => {
    let directive: HighlightDirective;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HighlightDirective, { provide: ElementRef, useClass: MockElementRef }]
        });
        directive = TestBed.inject(HighlightDirective);
    });

    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });
});
