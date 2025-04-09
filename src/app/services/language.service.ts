import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // Initialwert true = Englisch, false = Deutsch
  private languageSubject = new BehaviorSubject<boolean>(true);
  language$ = this.languageSubject.asObservable();

  // Methode zum Umschalten der Sprache
  setLanguage(isEnglish: boolean): void {
    this.languageSubject.next(isEnglish);
  }

  // Optional: synchronen Zugriff auf den aktuellen Wert
  get isEnglish(): boolean {
    return this.languageSubject.value;
  }
}
