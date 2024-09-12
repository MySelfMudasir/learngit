import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalContentComponent } from '../firstmodal/modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artical',
  standalone: true,
  imports: [
    RouterLink,
    ModalContentComponent,
    FormsModule
  ],
  templateUrl: './artical.component.html',
  styleUrl: './artical.component.css'
})
export class ArticalComponent {

  title = 'task';

  selectedImageName: string | undefined;
  labelText: string = 'This is a sample text data';
  headingText: string = 'This is a sample heading';


  constructor(public modalService: NgbModal) {
  }

  openModal(labelText: string, selectedImageName: string, headingText: string) {
    
    console.log('Label Text:', labelText);
    console.log('Selected Image Name:', selectedImageName);
    console.log('Heading Text:', headingText);

    const modalRef = this.modalService.open(ModalContentComponent, { size: 'xl' });
    modalRef.componentInstance.labelText = labelText;
    modalRef.componentInstance.selectedImageName = selectedImageName;
    modalRef.componentInstance.headingText = headingText;
  }



}
