import { Component, computed, inject, signal } from '@angular/core';
import { TableService } from '../../services/table-service';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  //Tillgång till service
  tableService = inject(TableService);

  //hämtar kurserna från service
  courses = this.tableService.getCourses();

  //textsträng från inmatning för filtrering
  searchText = signal("");

  filteredCourses = computed(() => {
    const search = this.searchText().trim().toLowerCase();
    if(!search) {
      return this.courses();
    }

    return this.courses().filter(c => 
      c.coursename.toLowerCase().includes(search) || 
      c.code.toLowerCase().includes(search)
    );
  })
}
