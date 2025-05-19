import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-bundle-browser',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './bundle-browser.component.html',
  styleUrl: './bundle-browser.component.css'
})
export class BundleBrowserComponent {

  @Output() fieldChange = new EventEmitter<string>();
  field: string = ''

  onChange(event: any) {
    this.field = event.target.value;
    this.fieldChange.emit(this.field);
  }

}
