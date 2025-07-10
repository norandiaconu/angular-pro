import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { User } from 'src/app/advanced-components/advanced-components.interface';

@Directive({
    selector: '[myFor][myForOf]',
    standalone: true
})
export class MyForDirective {
    private view = inject(ViewContainerRef);
    private template = inject<TemplateRef<any>>(TemplateRef);

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
