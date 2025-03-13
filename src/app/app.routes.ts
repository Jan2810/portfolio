import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage-component/homepage.component';
import { SingleProjectViewComponent } from './single-project-view/single-project-view.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'project/:id', component: SingleProjectViewComponent },
];
