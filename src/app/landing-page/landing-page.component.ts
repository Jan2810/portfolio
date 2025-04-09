import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  isEnglish: boolean = true;
  buttonText: String = 'Hello world';

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.isEnglish = lang;
    });
  }

  changeText() {
    if (this.isEnglish) {
    this.buttonText = "I'M JAN STEINER";
    } else {
    this.buttonText = "ICH BIN JAN STEINER";
    }
  }

  resetText() {
    this.buttonText = "Hello World";
  }

}
