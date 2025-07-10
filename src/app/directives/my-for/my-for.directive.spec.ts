import { ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { MyForDirective } from './my-for.directive';
import { TestBed } from '@angular/core/testing';
import { MockElementRef } from '../highlight/highlight.directive.spec';

describe('MyForDirective', () => {
    let directive: MyForDirective;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MyForDirective, ViewContainerRef, TemplateRef, { provide: ElementRef, useClass: MockElementRef }]
        });
        directive = TestBed.inject(MyForDirective);
    });

    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });
});
