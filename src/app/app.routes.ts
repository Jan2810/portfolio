import { Routes } from '@angular/router';
import { HomepageComponentComponent } from './homepage-component/homepage-component.component';
import { SingleProjectViewComponent } from './single-project-view/single-project-view.component';

export const routes: Routes = [
    { path: '', component: HomepageComponentComponent },
    { path: 'single-project/:id', component: SingleProjectViewComponent },
];
