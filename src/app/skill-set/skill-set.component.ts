import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  isEnglish: boolean = true;
  stickerIsRipped: Boolean = false;
  imageSrc = "./assets/img/skill_set/sticker_closed.png"

  constructor(private languageService: LanguageService) {
      this.languageService.language$.subscribe(lang => {
        this.isEnglish = lang;
      });
    }

  changeImg() {
    if (!this.stickerIsRipped) {
      this.imageSrc = "./assets/img/skill_set/sticker_hovered.png"
    }
  }

  resetImg() {
    if (!this.stickerIsRipped) {
      this.imageSrc = "./assets/img/skill_set/sticker_closed.png"
    }
  }

  ripImg() {
    this.imageSrc = "./assets/img/skill_set/sticker_ripped.png";
    this.stickerIsRipped = true;
  }

}
