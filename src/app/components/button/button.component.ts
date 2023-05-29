import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() variants: string = 'contained';
  @Input() type: string = 'button';

  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();
  onClick() {
    this.clickEvent.emit();
  }
}
