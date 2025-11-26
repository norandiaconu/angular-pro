import {
    AfterContentInit,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    OnDestroy,
    OutputRefSubscription,
    TemplateRef,
    ViewContainerRef,
    inject,
    viewChild
} from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './advanced-components.interface';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { TemplateContainerComponent } from './template-container/template-container.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';

@Component({
    selector: 'advanced-components',
    templateUrl: './advanced-components.component.html',
    styleUrls: ['./advanced-components.component.scss'],
    imports: [
        RouterLink,
        RouterOutlet,
        AuthFormComponent,
        AuthRememberComponent,
        TemplateContainerComponent,
        ViewEncapsulationComponent,
        ChangeDetectionComponent
    ]
})
export class AdvancedComponentsComponent implements AfterContentInit, OnDestroy {
    protected readonly template = viewChild.required<TemplateRef<any>>('template');

    private rememberMe = false;
    private subscription!: OutputRefSubscription;
    private component!: ComponentRef<AuthFormComponent>;

    private readonly entry = viewChild.required('entry', { read: ViewContainerRef });
    private readonly resolver = inject(ComponentFactoryResolver);

    ngAfterContentInit(): void {
        const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
        this.entry().createComponent(authFormFactory);
        this.component = this.entry().createComponent(authFormFactory, 0);
        this.component.instance.title = 'Dynamic Create';
        this.subscription = this.component.instance.submitted.subscribe(this.createUser);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    protected createUser(user: User): void {
        console.log('Create Account', user);
    }

    protected loginUser(user: User): void {
        console.log('Login Account', user, this.rememberMe);
    }

    protected rememberUser(remember: boolean): void {
        this.rememberMe = remember;
    }

    protected destroyComponent(): void {
        this.component.destroy();
    }

    protected moveComponent(): void {
        this.entry().move(this.component.hostView, 1);
    }
}
