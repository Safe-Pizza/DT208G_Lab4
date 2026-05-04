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

  //filtrering från söktext
  filteredCourses = computed(() => {
    const search = this.searchText().trim().toLowerCase();
    if (!search) {
      return this.courses();
    }

    return this.courses().filter(c =>
      c.coursename.toLowerCase().includes(search) ||
      c.code.toLowerCase().includes(search)
    );
  })

  //räknade för sorteringsordning
  codeClickCount = 0;
  nameClickCount = 0;
  progressionClickCount = 0;

  //sortering efter kurskod, växlar mellan stigande och fallande ordning
  sortByCode() {
    this.codeClickCount++;
    if (this.codeClickCount % 2 !== 0) {
      return this.filteredCourses().sort((a, b) => a.code.localeCompare(b.code));
    } else {
      return this.filteredCourses().sort((a, b) => b.code.localeCompare(a.code));
    }
  }

  //sortering efter kursnamn, växlar mellan stigande och fallande ordning
  sortByName() {
    this.nameClickCount++;
    if (this.nameClickCount % 2 !== 0) {
      return this.filteredCourses().sort((a, b) => a.coursename.localeCompare(b.coursename));
    } else {
      return this.filteredCourses().sort((a, b) => b.coursename.localeCompare(a.coursename));
    }
  }

  //sortering efter progression, växlar mellan stigande och fallande ordning
  sortByProgression() {
    this.progressionClickCount++;
    if (this.progressionClickCount % 2 !== 0) {
      return this.filteredCourses().sort((a, b) => a.progression.localeCompare(b.progression));
    } else {
      return this.filteredCourses().sort((a, b) => b.progression.localeCompare(a.progression));
    }
  }
}
