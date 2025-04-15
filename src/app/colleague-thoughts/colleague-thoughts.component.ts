import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-colleague-thoughts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colleague-thoughts.component.html',
  styleUrls: ['./colleague-thoughts.component.scss', './colleague-thoughts.component.media.scss'],
})
export class ColleagueThoughtsComponent {

  isEnglish: boolean = true;

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.isEnglish = lang;
    });
  }

}