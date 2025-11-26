import { AfterContentInit, Component, TemplateRef, ViewContainerRef, viewChild } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'template-container',
    templateUrl: './template-container.component.html',
    styleUrls: ['./template-container.component.scss'],
    imports: [NgTemplateOutlet]
})
export class TemplateContainerComponent implements AfterContentInit {
    protected context = {
        $implicit: 'Noran Diaconu',
        location: 'North Carolina'
    };

    private readonly entry = viewChild.required('entry', { read: ViewContainerRef });
    private readonly template = viewChild.required<TemplateRef<any>>('template');

    ngAfterContentInit(): void {
        this.entry().createEmbeddedView(this.template(), {
            $implicit: 'Noran',
            location: 'North Carolina'
        });
    }
}
