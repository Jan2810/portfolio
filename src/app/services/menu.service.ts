import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // Mit diesem Subject senden wir das Event, wenn der Button geklickt wird.
  private toggleMenuSubject = new Subject<void>();
  toggleMenu$ = this.toggleMenuSubject.asObservable();

  // Diese Methode ruft man auf, um das Event zu triggern.
  toggleMenu() {
    this.toggleMenuSubject.next();
  }
}