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
    public readonly submitted = output<User>();
    public title: string;
    protected showMessage: boolean;
    protected useRenderer: boolean;

    private subscription: Subscription;
    private readonly remember = contentChild(AuthRememberComponent);
    private readonly rememberList = contentChildren(AuthRememberComponent);
    private readonly message = viewChild.required(AuthMessageComponent);
    private readonly messages = viewChildren(AuthMessageComponent);
    private readonly email = viewChild.required<ElementRef>('email');
    private readonly password = viewChild.required<ElementRef>('password');
    private readonly createButton = viewChild<ElementRef>('createButton');
    private readonly changeDetector = inject(ChangeDetectorRef);
    private readonly renderer = inject(Renderer2);

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

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    protected onSubmit(value: User): void {
        this.submitted.emit(value);
    }
}
