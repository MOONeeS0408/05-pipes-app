import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  nameLower = signal('FERNANDO');
  nameUpper = signal('fernando');
  fullName = signal('feRnAnDo heRReRa ');
}
