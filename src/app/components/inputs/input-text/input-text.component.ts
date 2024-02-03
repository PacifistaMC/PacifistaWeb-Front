import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgClass
  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent {
  @Input() label: string = 'Text';
  @Input() placeholder: string = 'Hint';
  @Input() id: string = 'validationText';
  @Input() text: string = '';
  @Input() required: boolean = true;
  @Input() formSent: boolean = false;
  @Input() inputErrors: string[] = [];
  @Output() textChange = new EventEmitter<string>();

  onInput() {
    this.textChange.emit(this.text);
  }
}
