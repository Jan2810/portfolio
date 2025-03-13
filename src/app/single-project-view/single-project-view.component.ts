import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../shared/header/header.component";
import { SingleProject, projects } from '../interfaces/single-project.interface';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

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

  projectIndex: number = 0;
  project!: SingleProject;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const idParam = this.route.snapshot.params['id'];
    this.projectIndex = +idParam;
    this.project = projects[this.projectIndex];
    console.log('Geladenes Projekt:', this.project);
  }

  nextProject() {
    this.projectIndex = (this.projectIndex + 1) % projects.length;
    this.project = projects[this.projectIndex];
    this.router.navigate(['/project', this.projectIndex])
  }
}
