import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  imgSrc: String = "./assets/img/footer/logo_blue.png"

  isEnglish: boolean = true;

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.isEnglish = lang;
    });
  }

  changeImg() {
    this.imgSrc = './assets/img/footer/logo_yellow.png'
  }

  resetImg() {
    this.imgSrc = './assets/img/footer/logo_blue.png'
  }
}
