import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  isEnglish: boolean = true;

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.isEnglish = lang;
    });
  } 
}
