import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { User } from '../../advanced-components.interface';

@Component({
    selector: 'example-1',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './example-1.component.html',
    styleUrls: ['./example-1.component.scss']
})
export class Example1Component {
    public readonly user = input<User>({
        email: '',
        password: ''
    });

    protected update(): void {
        this.user().name = 'Matt Skiba';
    }
}
