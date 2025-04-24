import { Component, inject } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { FooterComponent } from './../shared/footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../services/language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule, FooterComponent, RouterModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss', './contact-form.component.media.scss'],
})
export class ContactFormComponent {

  http = inject(HttpClient);
  isEnglish: boolean = true;
  isChecked = false;
  contactData = {
    name: "",
    email: "",
    message: "",
  }
  mailTest = false;
  post = {
    endPoint: 'https://jan-steiner-dev.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };




  namePlaceholderEn: string = "Your name goes here";
  namePlaceholderEnError: string = "At least 2 characters...";
  namePlaceholderDe: string = "Hier deinen Namen eintragen";
  namePlaceholderDeError: string = "Mindestens 2 Zeichen";
  currentPlaceholderName: string = '';
  private backupName = '';

  emailPlaceholderEn: string = "yourmail@example.com";
  emailPlaceholderEnError: string = "Enter a valid email address";
  emailPlaceholderDe: string = "deineemail@beispiel.de";
  emailPlaceholderDeError: string = "Gültige E-Mail-Adresse eintragen";
  currentPlaceholderEmail: string = '';
  private backupEmail = '';

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.isEnglish = lang;
    });
  }




  ngOnInit() {
    this.resetPlaceholder();
  }

  /*** Hilfsfunktion: Standard-Placeholder je nach Sprache zurücksetzen ***/
  private resetPlaceholder() {
    this.currentPlaceholderName = this.isEnglish
      ? this.namePlaceholderEn
      : this.namePlaceholderDe;
      this.currentPlaceholderEmail = this.isEnglish
      ? this.emailPlaceholderEn
      : this.emailPlaceholderDe;
  }

  /*** 4a) Blur-Handler: bei invalid → Backup speichern + Error-Placeholder ***/
  onNameBlur(nameField: NgModel) {
    if (nameField.invalid && (nameField.touched || nameField.dirty)) {
      this.backupName = this.contactData.name;   // ungültigen Text sichern
      this.contactData.name = '';                // Feld leeren
      this.currentPlaceholderName = this.isEnglish
        ? this.namePlaceholderEnError
        : this.namePlaceholderDeError;
    }
  }

  /*** 4b) Focus-Handler: Backup zurückholen + Standard-Placeholder wiederherstellen ***/
  onNameFocus() {
    if (this.backupName) {
      this.contactData.name = this.backupName;  // alten Text zurücksetzen
      this.backupName = '';
    }
    this.resetPlaceholder();
  }


  onEmailBlur(emailField: NgModel) {
    if (emailField.invalid && (emailField.touched || emailField.dirty)) {
      this.backupEmail = this.contactData.email;   // ungültigen Text sichern
      this.contactData.email = '';                // Feld leeren
      this.currentPlaceholderEmail = this.isEnglish
        ? this.emailPlaceholderEnError
        : this.emailPlaceholderDeError;
    }
  }

  /*** 4b) Focus-Handler: Backup zurückholen + Standard-Placeholder wiederherstellen ***/
  onEmailFocus() {
    if (this.backupEmail) {
      this.contactData.email = this.backupEmail;  // alten Text zurücksetzen
      this.backupEmail = '';
    }
    this.resetPlaceholder();
  }







  onSubmit(ngForm: NgForm) {
    const emailControl = ngForm.controls['email'];
    if (emailControl && !emailControl.valid) {
      this.contactData.email = '';
      console.log("Die E-Mail-Adresse ist ungültig – Feld wurde geleert.");
      return;
    }
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('worked');
      ngForm.resetForm();
    }
  }

}
