import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.css'
})
export class ModalContentComponent {


  @Input() labelText: string = 'This is a sample text data123';
  @Input() selectedImageName: string | undefined;
  @Input() headingText: string = 'This is a sample heading';

  constructor(public modal: NgbActiveModal) {
    // Access the data passed to the modal in the constructor
  }
  


  
  ngOnInit(): void {
    // Access the data passed to the modal after the component is initialized
    console.log('Modal opened with labelText:', this.labelText);
    console.log('Modal opened with selectedImageName:', this.selectedImageName);
    console.log('Modal opened with headingText:', this.headingText);
  }

}
