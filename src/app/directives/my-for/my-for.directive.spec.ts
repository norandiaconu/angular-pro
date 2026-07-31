import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { describe, it, beforeEach, expect } from 'vitest';
import { User } from '../../advanced-components/advanced-components.interface';
import { MyForDirective } from './my-for.directive';

@Component({
    standalone: true,
    imports: [MyForDirective],
    template: ` <div *myFor="let user of users; let i = index" class="user-item">{{ i }}: {{ user.name }}</div> `
})
class TestUserComponent {
    users: User[] = [];
}

describe('MyForDirective', () => {
    let fixture: ComponentFixture<TestUserComponent>;
    let component: TestUserComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestUserComponent, MyForDirective]
        }).compileComponents();

        fixture = TestBed.createComponent(TestUserComponent);
        component = fixture.componentInstance;
    });

    it('should render a list of users', () => {
        component.users = [{ name: 'Alice' } as User, { name: 'Bob' } as User];

        fixture.detectChanges();

        const debugElements = fixture.debugElement.queryAll(By.css('.user-item'));
        expect(debugElements.length).toBe(2);
        expect(debugElements[0].nativeElement.textContent).toContain('0: Alice');
        expect(debugElements[1].nativeElement.textContent).toContain('1: Bob');
    });

    it('should clear the view when the list is emptied', () => {
        component.users = [{ name: 'Alice' } as User];

        component.users = [];
        fixture.detectChanges();

        const debugElements = fixture.debugElement.queryAll(By.css('.user-item'));
        expect(debugElements.length).toBe(0);
    });
});
