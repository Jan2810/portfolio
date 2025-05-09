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

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.isEnglish = lang;
      this.resetPlaceholder();
    });
  }

  ngOnInit() {
    this.resetPlaceholder();
  }

  private resetPlaceholder() {
    this.currentPlaceholderName = this.isEnglish
      ? this.namePlaceholderEn
      : this.namePlaceholderDe;
    this.currentPlaceholderEmail = this.isEnglish
      ? this.emailPlaceholderEn
      : this.emailPlaceholderDe;
    this.currentPlaceholderMessage = this.isEnglish
      ? this.messagePlaceholderEn
      : this.messagePlaceholderDe;
  }


  namePlaceholderEn: string = "Your name goes here";
  namePlaceholderEnError: string = "At least 2 characters...";
  namePlaceholderDe: string = "Hier deinen Namen eintragen";
  namePlaceholderDeError: string = "Mindestens 2 Zeichen";
  currentPlaceholderName: string = '';
  private backupName = '';

  onNameBlur(nameField: NgModel) {
    if (nameField.invalid && (nameField.touched || nameField.dirty)) {
      this.backupName = this.contactData.name;
      this.contactData.name = '';
      this.currentPlaceholderName = this.isEnglish
        ? this.namePlaceholderEnError
        : this.namePlaceholderDeError;
    }
  }

  onNameFocus() {
    if (this.backupName) {
      this.contactData.name = this.backupName;
      this.backupName = '';
    }
    this.resetPlaceholder();
  }


  emailPlaceholderEn: string = "yourmail@example.com";
  emailPlaceholderEnError: string = "Enter a valid email address";
  emailPlaceholderDe: string = "deineemail@beispiel.de";
  emailPlaceholderDeError: string = "Gültige E-Mail-Adresse eintragen";
  currentPlaceholderEmail: string = '';
  private backupEmail = '';

  onEmailBlur(emailField: NgModel) {
    if (emailField.invalid && (emailField.touched || emailField.dirty)) {
      this.backupEmail = this.contactData.email;
      this.contactData.email = '';
      this.currentPlaceholderEmail = this.isEnglish
        ? this.emailPlaceholderEnError
        : this.emailPlaceholderDeError;
    }
  }

  onEmailFocus() {
    if (this.backupEmail) {
      this.contactData.email = this.backupEmail;
      this.backupEmail = '';
    }
    this.resetPlaceholder();
  }
  

  messagePlaceholderEn: string = "Hi Jan, i'm interested in...";
  messagePlaceholderEnError: string = "At least 10 characters...";
  messagePlaceholderDe: string = "Hi Jan, ich interessiere mich...";
  messagePlaceholderDeError: string = "Mindestens 10 Zeichen";
  currentPlaceholderMessage: string = '';
  private backupMessage = '';

  onMessageBlur(messageField: NgModel) {
    if (messageField.invalid && (messageField.touched || messageField.dirty)) {
      this.backupMessage = this.contactData.message;
      this.contactData.message = '';
      this.currentPlaceholderMessage = this.isEnglish
        ? this.messagePlaceholderEnError
        : this.messagePlaceholderDeError;
    }
  }

  onMessageFocus() {
    if (this.backupMessage) {
      this.contactData.message = this.backupMessage;
      this.backupMessage = '';
    }
    this.resetPlaceholder();
  }


  buttonTextEn: string = "Send";
  buttonTextFeedbackEn: string = "Sent!";
  buttonTextDe: string = "Senden";
  buttonTextFeedbackDe: string = "Gesendet!";
  isFlashing = false;
  buttonText = this.getCurrentText();

  private getCurrentText(): string {
    return this.isEnglish
      ? this.buttonTextEn
      : this.buttonTextDe;
  }

  private getFeedbackText(): string {
    return this.isEnglish
      ? this.buttonTextFeedbackEn
      : this.buttonTextFeedbackDe;
  }

  triggerFlash() {
    this.isFlashing = false;
    setTimeout(() => {
      this.isFlashing = true;
      this.buttonText = this.getFeedbackText();
    }, 0);
    setTimeout(() => {
      this.isFlashing = false;
      this.buttonText = this.getCurrentText();
    }, 1000);
  }

  onSubmit(ngForm: NgForm) {
    const emailControl = ngForm.controls['email'];
    if (emailControl && !emailControl.valid) {
      this.contactData.email = '';
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
          // complete: () => console.info(),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('worked');
      ngForm.resetForm();
    }
  }

}
