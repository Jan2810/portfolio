import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  buttonText: String = 'Hello world';

  changeText() {
    this.buttonText = "I'M JAN STEINER";
  }

  resetText() {
    this.buttonText = "Hello World";
  }

}
