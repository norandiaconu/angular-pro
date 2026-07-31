import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { JsonPipe } from '@angular/common';
import { MyForDirective } from './my-for/my-for.directive';
import { HighlightDirective } from './highlight/highlight.directive';

@Component({
    selector: 'directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.scss'],
    imports: [CreditCardDirective, TooltipDirective, MyForDirective, HighlightDirective, JsonPipe]
})
export class DirectivesComponent {
    private readonly cdRef = inject(ChangeDetectorRef);

    protected items = [
        { name: 'Mark Hoppus', age: 48, location: 'California' },
        { name: 'Tom Delonge', age: 45, location: 'California' },
        { name: 'Travis Barker', age: 45, location: 'California' }
    ];

    constructor() {
        setTimeout(() => {
            this.items = [
                ...this.items,
                {
                    name: 'Matt Skiba',
                    age: 44,
                    location: 'California'
                }
            ];
            this.cdRef.markForCheck();
        }, 5000);
    }
}
