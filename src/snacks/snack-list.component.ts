import { Component, Input, computed, inject, input } from '@angular/core';
import { SnackService } from './snack.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-snack-list',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './snack-list.component.html'
})
export class SnackListComponent {
  // @Input({ required: true, alias: 'listCriteria' })
  // public filterCriteria: string = '';

  pageTitle = 'Snacks';

  // filterCriteria = input.required({
  //   transform: (value: string) => value.toLocaleLowerCase(),
  //   alias: 'listCriteria'
  // });

  // filterCriteria = input('')
  filterCriteria = input('', {
    transform: (value: string) => value.toLocaleLowerCase()
  })

  snackService = inject(SnackService);

  snacks = this.snackService.snacks;
  filteredSnacks = computed(() =>
    this.snacks().filter(s => s.name.includes(this.filterCriteria())));

}
