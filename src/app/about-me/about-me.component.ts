import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  isEnglish: boolean = true;

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.isEnglish = lang;
    });
  }

}
