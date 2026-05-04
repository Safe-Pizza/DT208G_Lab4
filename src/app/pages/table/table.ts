import { Component, inject } from '@angular/core';
import { TableService } from '../../services/table-service';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  tableService = inject(TableService);

  courses = this.tableService.getCourses();
}
