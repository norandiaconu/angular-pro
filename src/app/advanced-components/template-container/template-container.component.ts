import { AfterContentInit, Component, TemplateRef, ViewContainerRef, viewChild } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'template-container',
    templateUrl: './template-container.component.html',
    styleUrls: ['./template-container.component.scss'],
    imports: [NgTemplateOutlet]
})
export class TemplateContainerComponent implements AfterContentInit {
    readonly entry = viewChild.required('entry', { read: ViewContainerRef });
    readonly template = viewChild.required<TemplateRef<any>>('template');

    context = {
        $implicit: 'Noran Diaconu',
        location: 'North Carolina'
    };

    constructor() {}

    ngAfterContentInit(): void {
        this.entry().createEmbeddedView(this.template(), {
            $implicit: 'Noran',
            location: 'North Carolina'
        });
    }
}
