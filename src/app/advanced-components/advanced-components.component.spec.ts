import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AdvancedComponentsComponent } from './advanced-components.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { Example1Component } from './change-detection/example-1/example-1.component';
import { Example2Component } from './change-detection/example-2/example-2.component';
import { TemplateContainerComponent } from './template-container/template-container.component';
import { ExampleOneComponent } from './view-encapsulation/example-one/example-one.component';
import { ExampleThreeComponent } from './view-encapsulation/example-three/example-three.component';
import { ExampleTwoComponent } from './view-encapsulation/example-two/example-two.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';

describe('AdvancedComponentsComponent', () => {
    let component: AdvancedComponentsComponent;
    let fixture: ComponentFixture<AdvancedComponentsComponent>;
    const routes: Routes = [];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule,
                RouterOutlet,
                AdvancedComponentsComponent,
                AuthFormComponent,
                AuthMessageComponent,
                AuthRememberComponent,
                ChangeDetectionComponent,
                Example1Component,
                Example2Component,
                ExampleOneComponent,
                ExampleTwoComponent,
                ExampleThreeComponent,
                TemplateContainerComponent,
                ViewEncapsulationComponent
            ],
            providers: [provideRouter(routes)]
        }).compileComponents();
        fixture = TestBed.createComponent(AdvancedComponentsComponent);
        component = fixture.componentInstance;
        component.ngAfterContentInit();
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create user', () => {
        jest.spyOn(window.console, 'log');
        component['createUser']({ email: 'email', password: 'password' });
        expect(window.console.log).toHaveBeenCalledWith('Create Account', { email: 'email', password: 'password' });
    });

    it('should login user', () => {
        jest.spyOn(window.console, 'log');
        component['loginUser']({ email: 'email', password: 'password' });
        expect(window.console.log).toHaveBeenCalledWith('Login Account', { email: 'email', password: 'password' }, false);
    });

    it('should remember user', () => {
        component['rememberUser'](true);
        expect(component['rememberMe']).toBe(true);
    });
});
