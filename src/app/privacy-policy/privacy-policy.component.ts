import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    BurgerMenuComponent,
    CommonModule
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
isEnglish: boolean = true;

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.isEnglish = lang;
    });
  }
}
