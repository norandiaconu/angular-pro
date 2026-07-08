import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, beforeEach, expect } from 'vitest';
import { RoutesComponent } from './routes.component';

describe('RoutesComponent', () => {
    let component: RoutesComponent;
    let fixture: ComponentFixture<RoutesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RoutesComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(RoutesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
