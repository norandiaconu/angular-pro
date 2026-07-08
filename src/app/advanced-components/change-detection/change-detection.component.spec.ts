import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, beforeEach, expect } from 'vitest';
import { ChangeDetectionComponent } from './change-detection.component';
import { Example1Component } from './example-1/example-1.component';
import { Example2Component } from './example-2/example-2.component';

describe('ChangeDetectionComponent', () => {
    let component: ChangeDetectionComponent;
    let fixture: ComponentFixture<ChangeDetectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ChangeDetectionComponent, Example1Component, Example2Component]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChangeDetectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should add email property', () => {
        component['addProp']();
        expect(component['user'].email).toBe('blink-182.net');
    });
});
