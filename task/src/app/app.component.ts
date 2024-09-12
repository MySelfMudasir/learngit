import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './firstmodal/modal-content/modal-content.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent2 } from './navbar2/navbar2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    NavbarComponent2,
    HomeComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export default class AppComponent {
  title = 'task';



  constructor(public modalService: NgbModal) {
    
  }


  openModal() {
    this.modalService.open(ModalContentComponent);
  }



  
}
