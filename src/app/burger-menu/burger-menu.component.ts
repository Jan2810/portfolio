import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  engIsActive: boolean = true;
  deIsActive: boolean = false;
  activeColor: string = '#F87A55';
  inactiveColor: string = '#FFFFFF';
  toggleImgSrc: String = './assets/img/header/toggle_left.png';

  toggleToEnglish() {
    this.toggleImgSrc = './assets/img/header/toggle_left.png';
    this.engIsActive = true;
    this.deIsActive = false;
  }

  toggleToGerman() {
    this.toggleImgSrc = './assets/img/header/toggle_right.png';
    this.deIsActive = true;
    this.engIsActive = false;
  }
}
