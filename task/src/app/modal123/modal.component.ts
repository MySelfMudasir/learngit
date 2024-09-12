import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { inject } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
	CommonModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  private modalService = inject(NgbModal);
  closeResult = '';

  @Input() imageName: string | undefined; // Receive data from parent
  @Input() labelText: string = ''; // Receive data from parent
  @Input() headingText:string = ''; // Receive data from parent
  @ViewChild('content') contentTemplate!: TemplateRef<any>;

  open(content: TemplateRef<any>) {
    console.log('Received image name:', this.imageName); // Optional: Check if data is received correctly
	console.log('Received text data:', this.labelText); // Optional: Check if data is received correctly
	console.log('Received heading data:', this.headingText); // Optional: Check if data is received correctly
	
    this.modalService.open(content, {fullscreen: true, ariaLabelledBy: 'modal-basic-title' }).result.then(

      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
