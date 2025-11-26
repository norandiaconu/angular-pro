import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { User } from '../../advanced-components/advanced-components.interface';

@Directive({
    selector: '[myFor][myForOf]'
})
export class MyForDirective {
    private readonly view = inject(ViewContainerRef);
    private readonly template = inject<TemplateRef<any>>(TemplateRef);

    @Input()
    set myForOf(collection: any) {
        this.view.clear();
        collection.forEach((item: User, index: number) => {
            this.view.createEmbeddedView(this.template, {
                $implicit: item,
                index
            });
        });
    }
}
