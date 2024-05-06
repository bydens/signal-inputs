import { Component, model } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  template: `
      <div class='card'>
      <div class='card-body'>
        <div class='row'>
          <div class='col-sm-2'>Filter by:</div>
          <div class='col-sm-2'>
            <input type='text'
                  [(ngModel)]='filter' />
          </div>
        </div>
      </div>
    </div>
  `
})
export class FilterComponent {
  // filter = model('', {
  //   alias: 'filterCriteria'
  // })  
  filter = model.required({
    alias: 'filterCriteria'
  })
}