import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {

  isOpen: boolean = false;
  private toggleSubscription!: Subscription;

  engIsActive: boolean = true;
  deIsActive: boolean = false;
  activeColor: string = '#F87A55';
  inactiveColor: string = '#FFFFFF';
  toggleImgSrc: String = './assets/img/header/toggle_left.png';

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.toggleSubscription = this.menuService.toggleMenu$.subscribe(() => {
      this.isOpen = !this.isOpen;
    });
  }

  toggleMenu() {
    this.isOpen = false;
  }

  ngOnDestroy(): void {
    this.toggleSubscription.unsubscribe();
  }

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
