import { Component } from '@angular/core';
import { SnackListComponent } from './snack-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-snack',
  standalone: true,
  imports: [SnackListComponent, FormsModule],
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{pageTitle}}</a>
    </nav>
    <div class='card'>
      <div class='card-body'>
        <div class='row'>
          <div class='col-sm-2'>Filter by:</div>
          <div class='col-sm-2'>
            <input type='text'
                  [(ngModel)]='listFilter' />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- <app-snack-list [listCriteria]='listFilter'/> -->
      <app-snack-list [filterCriteria]='listFilter'/>
    </div>
  `
})
export class SnackComponent {
  pageTitle = 'Menu Options';
  listFilter = '';
}
