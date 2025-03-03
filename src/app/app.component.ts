import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillSetComponent } from "./skill-set/skill-set.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ColleagueThoughtsComponent } from "./colleague-thoughts/colleague-thoughts.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, LandingPageComponent, AboutMeComponent, SkillSetComponent, ProjectsComponent, ColleagueThoughtsComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'porfolio';
}
