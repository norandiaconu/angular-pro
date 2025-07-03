import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

import { AuthFormComponent } from './auth-form.component';

describe('AuthFormComponent', () => {
    let component: AuthFormComponent;
    let fixture: ComponentFixture<AuthFormComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, AuthFormComponent, AuthMessageComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(AuthFormComponent);
        component = fixture.componentInstance;
        jest.spyOn(console, 'log').mockImplementation(() => {});
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
