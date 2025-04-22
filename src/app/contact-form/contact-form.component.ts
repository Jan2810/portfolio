import { Component, inject } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, NgForm } from '@angular/forms';
import { FooterComponent } from './../shared/footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule, FooterComponent],
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

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.isEnglish = lang;
    });
  }

  get nameErrorText(): string {
    return this.isEnglish
      ? 'At least 3 characters...'
      : 'Mindestens 3 Zeichen...';
  }
  private backupName = '';
  showNameError = false;

  onNameBlur() {
    if ((this.contactData.name?.trim().length || 0) < 3) {
      this.backupName = this.contactData.name;
      this.contactData.name = this.nameErrorText;
      this.showNameError = true;
    }
  }

  onNameFocus() {
    if (this.showNameError) {
      this.contactData.name = this.backupName;
      this.showNameError = false;
    }
  }

  get emailErrorText(): string {
    return this.isEnglish
      ? 'Enter a valid email address'
      : 'Gültige E-Mail-Adresse eintragen';
  }
  private backupEmail = '';
  showEmailError = false;

  onEmailBlur() {
    const valid = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(this.contactData.email || '');
    if (!valid) {
      this.backupEmail = this.contactData.email;
      this.contactData.email = this.emailErrorText;
      this.showEmailError = true;
    }
  }

  onEmailFocus() {
    if (this.showEmailError) {
      this.contactData.email = this.backupEmail;
      this.showEmailError = false;
    }
  }

  get messageErrorText(): string {
    return this.isEnglish
      ? 'At least 10 characters...'
      : 'Mindestens 10 Zeichen...';
  }
  private backupMessage = '';
  showMessageError = false;

  onMessageBlur() {
    if ((this.contactData.message?.trim().length || 0) < 10) {
      this.backupMessage = this.contactData.message;
      this.contactData.message = this.messageErrorText;
      this.showMessageError = true;
    }
  }

  onMessageFocus() {
    if (this.showMessageError) {
      this.contactData.message = this.backupMessage;
      this.showMessageError = false;
    }
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
