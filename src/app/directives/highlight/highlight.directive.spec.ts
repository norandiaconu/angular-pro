import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { TestBed } from '@angular/core/testing';

export class MockElementRef extends ElementRef {
    nativeElement = {
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
