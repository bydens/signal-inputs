import { Component, computed, signal } from '@angular/core';
import { SnackListComponent } from './snack-list.component';
import { FilterComponent } from './filter.component';

@Component({
  selector: 'app-snack',
  standalone: true,
  imports: [SnackListComponent, FilterComponent],
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{pageTitle}}</a>
    </nav>
    <!-- <app-filter [(filter)]='listFilter' /> -->
    <app-filter [(filterCriteria)]='listFilter' />
    <!-- <app-filter [filterCriteria]='listFilter' 
    (filterCriteriaChange)="processFilter($any($event))"/> -->
    <div class="container">
    <!-- <div> Filter length: {{filterLength}}</div> -->
    <div> Filter length: {{filterLength()}}</div>
      <!-- <app-snack-list [filterCriteria]='listFilter'/> -->
      <app-snack-list [filterCriteria]='listFilter()'/>
    </div>
  `
})
export class SnackComponent {
  pageTitle = 'Menu Options';
  // listFilter = '';
  // filterLength = 0
  listFilter = signal('');
  filterLength = computed(() => this.listFilter().length)

  // processFilter(enterFilter: string): void {
  //   // this.listFilter = enterFilter
  //   // this.filterLength = enterFilter.length
  //   this.listFilter.set(enterFilter)
  //   // this.filterLength = enterFilter.length
  // }
}
