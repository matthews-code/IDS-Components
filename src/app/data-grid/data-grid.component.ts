import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import type IdsDataGrid from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid';
import type { IdsDataGridColumn } from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid-column';
import booksJSON from './books.json';
// import '../ids-data-grid';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements AfterViewInit {
  constructor() {}

  @ViewChild('dataGridEditable') dataGrid!: ElementRef<IdsDataGrid>;
  // @ViewChild('pageContainer') pageContainer!: ElementRef;
  columns: IdsDataGridColumn[] = [];

  ngAfterViewInit(): void {
    this.columns.push({
      id: 'selectionCheckbox',
      name: 'selection',
      sortable: false,
      resizable: false,
      formatter: this.dataGrid.nativeElement.formatters.selectionCheckbox,
      align: 'center',
    });
    this.columns.push({
      id: 'rowNumber',
      name: '#',
      formatter: this.dataGrid.nativeElement.formatters.rowNumber,
      sortable: false,
      resizable: true,
      reorderable: true,
      readonly: true,
      width: 65,
    });
    this.columns.push({
      id: 'description',
      name: 'Description',
      field: 'description',
      sortable: true,
      resizable: true,
      reorderable: true,
      formatter: this.dataGrid.nativeElement.formatters.text,
      editor: {
        type: 'input',
        inline: true,
        editorSettings: {
          autoselect: true,
          dirtyTracker: true,
        },
      },
    });
    this.columns.push({
      id: 'ledger',
      name: 'Ledger',
      field: 'ledger',
      resizable: true,
      reorderable: true,
      formatter: this.dataGrid.nativeElement.formatters.text,
    });
    this.columns.push({
      id: 'price',
      name: 'Price',
      field: 'price',
      resizable: true,
      reorderable: true,
      formatter: this.dataGrid.nativeElement.formatters.decimal,
      formatOptions: { locale: 'en-US' }, // Data Values are in en-US
    });

    // this.dataGrid.nativeElement.rowHeight = 'xs';
    this.dataGrid.nativeElement.columns = this.columns;
    this.dataGrid.nativeElement.data = booksJSON;
  }
}
