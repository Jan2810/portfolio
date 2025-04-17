import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  imgSrc: String = "./assets/img/footer/logo_blue.png"

  changeImg() {
    this.imgSrc = './assets/img/footer/logo_yellow.png'
  }

  resetImg() {
    this.imgSrc = './assets/img/footer/logo_blue.png'
  }
}
