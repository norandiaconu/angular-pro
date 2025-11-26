import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { User } from '../../advanced-components.interface';

@Component({
    selector: 'example-2',
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './example-2.component.html',
    styleUrls: ['./example-2.component.scss']
})
export class Example2Component {
    public readonly user = input<User>({
        email: '',
        password: ''
    });

    protected update(): void {
        this.user().name = 'Matt Skiba';
    }
}
