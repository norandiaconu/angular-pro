import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, beforeEach, expect } from 'vitest';
import { ExampleOneComponent } from './example-one.component';

describe('ExampleOneComponent', () => {
    let component: ExampleOneComponent;
    let fixture: ComponentFixture<ExampleOneComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleOneComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleOneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
