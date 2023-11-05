import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sobre-popup',
  templateUrl: './sobre-popup.component.html',
  styleUrls: ['./sobre-popup.component.css']
})
export class SobrePopupComponent {
  @Output() close = new EventEmitter<void>();
}
