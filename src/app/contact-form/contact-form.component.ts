import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './../shared/footer/footer.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule, FooterComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

isChecked = false;

contactData = {
  name: "",
  email: "",
  message: "",
}

onSubmit() {
  console.log(this.contactData);
  
}

}
