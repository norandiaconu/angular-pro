import { Directive, TemplateRef, ViewContainerRef, effect, inject, input } from '@angular/core';
import { User } from '../../advanced-components/advanced-components.interface';

@Directive({
    selector: '[myFor][myForOf]'
})
export class MyForDirective {
    public myForOf = input<any>();

    private readonly view = inject(ViewContainerRef);
    private readonly template = inject<TemplateRef<any>>(TemplateRef);

    constructor() {
        effect(() => {
            this.view.clear();
            this.myForOf().forEach((item: User, index: number) => {
                this.view.createEmbeddedView(this.template, {
                    $implicit: item,
                    index
                });
            });
        });
    }
}
