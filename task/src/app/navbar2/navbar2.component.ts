import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { GetApiComponent } from '../get-api/get-api.component';

@Component({
  selector: 'app-navbar2',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CommonModule,
    GetApiComponent,
  ],
  templateUrl: './navbar2.component.html',
  styleUrl: './navbar2.component.css'
})
export class NavbarComponent2 {

  
  togglenav() {
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse) {
    navbarCollapse.classList.toggle('show'); // Toggle visibility on button click

    // Close the navbar on link click in mobile view
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show'); // Remove the 'show' class to close
        }
      });
    });
  }
}

  
  
}
