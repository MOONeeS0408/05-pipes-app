import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  name = signal('Fernando Herrera');

  uppercase = signal(true);

  changeUppercase() {
    if (this.uppercase()) {
      console.log(this.uppercase);
      this.uppercase.set(false);
      return;
    }
    return this.uppercase.set(true);
  }
}
