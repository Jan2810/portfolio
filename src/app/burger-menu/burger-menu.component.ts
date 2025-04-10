import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { MenuService } from '../services/menu.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {

  isEnglish: boolean = true;
  isOpen: boolean = false;
  private toggleSubscription!: Subscription;

  engIsActive: boolean = true;
  deIsActive: boolean = false;
  activeColor: string = '#F87A55';
  inactiveColor: string = '#FFFFFF';
  toggleImgSrc: String = './assets/img/header/toggle_left.png';

  constructor(
    private menuService: MenuService,
    private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.isEnglish = lang;
      this.toggleImgSrc = this.isEnglish
      ? './assets/img/header/toggle_left.png' 
      : './assets/img/header/toggle_right.png';
    });
  }

  ngOnInit(): void {
    this.toggleSubscription = this.menuService.toggleMenu$.subscribe(() => {
      this.isOpen = !this.isOpen;
    });
  }

  toggleLanguage(): void {
    this.languageService.setLanguage(!this.isEnglish);
  }

  toggleMenu() {
    this.isOpen = false;
  }

  ngOnDestroy(): void {
    this.toggleSubscription.unsubscribe();
  }
}
