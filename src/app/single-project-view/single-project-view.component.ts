import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../shared/header/header.component";
import { SingleProject, projects } from '../interfaces/single-project.interface';

@Component({
  selector: 'app-single-project-view',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './single-project-view.component.html',
  styleUrl: './single-project-view.component.scss'
})
export class SingleProjectViewComponent {
  project: SingleProject = projects[0];
}
