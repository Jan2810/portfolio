import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  engIsActive: boolean = true;
  deIsActive: boolean = false;
  activeColor: string = '#F87A55';
  inactiveColor: string = '#FFFFFF';

  imgSrc: String = './assets/img/header/toggle_left.png';

  toggleToEnglish() {
    this.imgSrc = './assets/img/header/toggle_left.png';
    this.engIsActive = true;
    this.deIsActive = false;
  }

  toggleToGerman() {
    this.imgSrc = './assets/img/header/toggle_right.png';
    this.deIsActive = true;
    this.engIsActive = false;
  }
}
