import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { ArticalComponent } from '../artical/artical.component';
import { ContactComponent } from '../contact/contact.component';
import { GetApiComponent } from '../get-api/get-api.component';
import { PostApiComponent } from '../post-api/post-api.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ModalContentComponent } from '../firstmodal/modal-content/modal-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    AboutComponent,
    ArticalComponent,
    ContactComponent,
    ModalContentComponent,
    GetApiComponent,
    PostApiComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
