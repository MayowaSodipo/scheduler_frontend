import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [],
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() header: string = '';
  @Input() submitText: string = 'Submit';
  @Output() eventClick: EventEmitter<any> = new EventEmitter<any>();
  closeModal() {
    this.eventClick.emit();
  }
}
