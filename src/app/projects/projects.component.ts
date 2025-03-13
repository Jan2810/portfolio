import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { SingleProject, projects } from '../interfaces/single-project.interface';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor() {} 
}
