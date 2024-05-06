import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { SnackComponent } from './snacks/snack.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SnackComponent],
  template: `
    <app-snack/>
  `,
})
export class App {
}

bootstrapApplication(App);
