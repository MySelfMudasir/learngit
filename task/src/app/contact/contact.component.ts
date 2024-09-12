import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CommonModule
    
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  getFormData() {
    console.log('Form Data:', this.formData);
    alert('Form Data: ' + JSON.stringify(this.formData));
  }

}
