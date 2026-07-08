import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, beforeEach, expect } from 'vitest';
import { CustomPipesComponent } from './custom-pipes.component';
import { FilesizePipe } from './filesize.pipe';

describe('CustomPipesComponent', () => {
    let component: CustomPipesComponent;
    let fixture: ComponentFixture<CustomPipesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CustomPipesComponent, FilesizePipe],
            providers: [FilesizePipe]
        }).compileComponents();
        fixture = TestBed.createComponent(CustomPipesComponent);
        component = fixture.componentInstance;
        vi.spyOn(console, 'log').mockImplementation(() => {});
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
