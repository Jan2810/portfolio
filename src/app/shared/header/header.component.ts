import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isEnglish: boolean = true;
  activeColor: string = '#F87A55';
  inactiveColor: string = '#FFFFFF';

  toggleImgSrc: String = './assets/img/header/toggle_left.png';

  constructor(private menuService: MenuService, private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.isEnglish = lang;
      this.toggleImgSrc = this.isEnglish
      ? './assets/img/header/toggle_left.png' 
      : './assets/img/header/toggle_right.png';
    });
  }

  toggleLanguage(): void {
    this.languageService.setLanguage(!this.isEnglish);
  }

  logoImgSrc: String = "./assets/img/header/logo_blue.png"

  changeLogo() {
    this.logoImgSrc = "./assets/img/header/logo_yellow.png";
  }

  resetLogo() {
    this.logoImgSrc = "./assets/img/header/logo_blue.png";
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
