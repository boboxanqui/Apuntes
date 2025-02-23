import { Component } from '@angular/core';

@Component({
    selector: 'app-sql',
    templateUrl: './sql.component.html',
    styleUrls: ['./sql.component.css'],
    standalone: false
})
export class SqlComponent {

  code = `
    SELECT DISTINCT column, another_column, ...
    FROM my_table
  `
}
