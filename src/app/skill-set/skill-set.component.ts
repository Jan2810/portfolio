import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  stickerIsRipped: Boolean = false;
  imageSrc = "./assets/img/skill_set/sticker_closed.png"

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
