import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ColleagueThoughtsComponent } from '../colleague-thoughts/colleague-thoughts.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-homepage-component',
  standalone: true,
  imports: [
    HeaderComponent,
    LandingPageComponent,
    AboutMeComponent,
    SkillSetComponent,
    ProjectsComponent,
    ColleagueThoughtsComponent,
    ContactFormComponent
  ],
  templateUrl: './homepage-component.component.html',
  styleUrl: './homepage-component.component.scss'
})
export class HomepageComponentComponent {

}