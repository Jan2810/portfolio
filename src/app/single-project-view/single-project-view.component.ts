import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../shared/header/header.component";
import { SingleProject, projects } from '../interfaces/single-project.interface';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { BurgerMenuComponent } from "../burger-menu/burger-menu.component";
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-single-project-view',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterModule,
    BurgerMenuComponent
  ],
  templateUrl: './single-project-view.component.html',
  styleUrls: ['./single-project-view.component.scss', './single-project-view.component.media.scss']
})
export class SingleProjectViewComponent {

  isEnglish: boolean = true;
  projectIndex: number = 0;
  project!: SingleProject;
  linkText: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.isEnglish = lang;
    });
  }

  ngOnInit() {
    this.linkText = this.route.snapshot.params['title'];
    this.setProject();
    this.project = projects[this.projectIndex];
  }

  setProject() {
    if (this.linkText === 'join') {
      this.projectIndex = 0
    } else if (this.linkText === 'elpolloloco') {
      this.projectIndex = 1
    } else if (this.linkText === 'dabubble') {
      this.projectIndex = 2
    }
  }

  nextProject() {
    this.projectIndex = (this.projectIndex + 1) % projects.length;
    this.setLinkText();
    this.project = projects[this.projectIndex];
    this.router.navigate(['/project', this.linkText]);
  }

  setLinkText() {
    if (this.projectIndex === 0) {
      this.linkText = 'join'
    } else if (this.projectIndex === 1) {
      this.linkText = 'elpollolocco'
    } else if (this.projectIndex === 2) {
      this.linkText = 'dabubble'
    }
  }

}
