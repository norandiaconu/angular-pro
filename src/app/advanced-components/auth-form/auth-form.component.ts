import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnDestroy,
    OutputRefSubscription,
    Renderer2,
    inject,
    output,
    contentChild,
    contentChildren,
    viewChild,
    viewChildren
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthMessageComponent } from '../auth-message/auth-message.component';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { User } from '../advanced-components.interface';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.scss'],
    imports: [FormsModule, AuthMessageComponent]
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit, OnDestroy {
    readonly submitted = output<User>();
    readonly remember = contentChild(AuthRememberComponent);
    readonly rememberList = contentChildren(AuthRememberComponent);
    readonly message = viewChild.required(AuthMessageComponent);
    readonly messages = viewChildren(AuthMessageComponent);
    readonly email = viewChild.required<ElementRef>('email');
    readonly password = viewChild.required<ElementRef>('password');
    readonly createButton = viewChild<ElementRef>('createButton');

    showMessage: boolean;
    subscription: Subscription;
    useRenderer: boolean;
    title: string;

    private changeDetector = inject(ChangeDetectorRef);
    private renderer = inject(Renderer2);

    constructor() {
        this.showMessage = false;
        this.subscription = new Subscription();
        this.useRenderer = false;
        this.title = '';
    }

    ngAfterContentInit(): void {
        let tempSub: OutputRefSubscription;
        const remember = this.remember();
        if (remember) {
            console.log('afterContentInit remember', remember);
            tempSub = remember.checked.subscribe((checked: boolean) => {
                this.showMessage = checked;
            });
            this.subscription.add(tempSub);
        }
        const rememberList = this.rememberList();
        if (rememberList) {
            console.log('afterContentInit rememberList', rememberList);
            rememberList.forEach((item) => {
                tempSub = item.checked.subscribe((checked: boolean) => (this.showMessage = checked));
                this.subscription.add(tempSub);
            });
        }
        const message = this.message();
        if (message) {
            message.days = 30;
        }
    }

    ngAfterViewInit(): void {
        this.email().nativeElement.setAttribute('placeholder', 'Enter your email address');
        this.email().nativeElement.classList.add('email');
        const password = this.password();
        this.renderer.setAttribute(password.nativeElement, 'placeholder', 'Enter your password');
        this.renderer.addClass(password.nativeElement, 'password');
        password.nativeElement['focus'].apply(password.nativeElement);
        this.email().nativeElement.focus();
        console.log('afterViewInit email', this.email().nativeElement);
        const message = this.message();
        if (message) {
            console.log('afterViewInit message', message);
            this.messages().forEach((oneMessage) => {
                oneMessage.days = 30;
            });
            this.changeDetector.detectChanges();
        }
        const createButton = this.createButton();
        if (createButton) {
            createButton.nativeElement.classList.add('createButton');
        }
    }

    onSubmit(value: User): void {
        this.submitted.emit(value);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
