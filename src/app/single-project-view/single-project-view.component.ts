import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../shared/header/header.component";
import { SingleProject, projects } from '../interfaces/single-project.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-project-view',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './single-project-view.component.html',
  styleUrl: './single-project-view.component.scss'
})
export class SingleProjectViewComponent {
  
  projectIndex = 0;
  project: SingleProject = projects[this.projectIndex];

  nextProject() {
    this.projectIndex = (this.projectIndex + 1) % projects.length;
    this.project = projects[this.projectIndex];
  }
}
