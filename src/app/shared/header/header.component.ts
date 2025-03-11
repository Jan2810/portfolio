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


  logoImgSrc: String = "./assets/img/header/logo_blue.png"

  changeLogo() {
    this.logoImgSrc = "./assets/img/header/logo_yellow.png";
  }

  resetLogo() {
    this.logoImgSrc = "./assets/img/header/logo_blue.png";
  }
}
