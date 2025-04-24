import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage-component/homepage.component';
import { SingleProjectViewComponent } from './single-project-view/single-project-view.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'project/:title', component: SingleProjectViewComponent },
    { path: 'legalnotice', component: LegalNoticeComponent },
    { path: 'privacypolicy', component: PrivacyPolicyComponent }
];