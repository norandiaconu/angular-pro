import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { FilesizePipe } from './app/custom-pipes/filesize.pipe';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';

const routes: Routes = [{ path: 'route', loadComponent: () => import('./app/routes/routes.component').then(m => m.RoutesComponent) }];

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, FormsModule), FilesizePipe, provideRouter(routes)]
}).catch((err) => console.error(err));
