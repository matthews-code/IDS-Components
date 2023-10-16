import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import type IdsDataGrid from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid';
import type { IdsDataGridColumn } from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid-column';
import sampleData from './sample-data.json';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements AfterViewInit {
  constructor() {}

  @ViewChild('dataGridEditable') dataGrid!: ElementRef<IdsDataGrid>;
  columns: IdsDataGridColumn[] = [];

  // get sheet data from endpoint here

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
      id: 'create',
      name: '',
      field: 'create',
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
      id: 'status',
      name: '',
      field: 'status',
      resizable: true,
      reorderable: true,
      cssPart: (row: number) => (row < 4 || row > 4 ? 'custom-cell' : ''),
      formatter: this.dataGrid.nativeElement.formatters.text,
    });

    this.columns.push({
      id: 'enterpriseGroup',
      name: 'EnterpriseGroup',
      field: 'enterpriseGroup',
      resizable: true,
      reorderable: true,
      formatter: this.dataGrid.nativeElement.formatters.integer,
    });

    this.columns.push({
      id: 'busClassA',
      name: 'BusClassA',
      field: 'busClassA',
      resizable: true,
      reorderable: true,
      formatter: this.dataGrid.nativeElement.formatters.text,
    });

    this.columns.push({
      id: 'groupFieldB',
      name: 'GroupFieldB',
      field: 'groupFieldB',
      resizable: true,
      reorderable: true,
      formatter: this.dataGrid.nativeElement.formatters.text,
    });
    this.columns.push({
      id: 'parentGroupFieldB',
      name: 'ParentGroupFieldB',
      field: 'parentGroupFieldB',
      resizable: true,
      reorderable: true,
      formatter: this.dataGrid.nativeElement.formatters.text,
    });
    this.columns.push({
      id: 'name',
      name: 'Name',
      field: 'name',
      resizable: true,
      reorderable: true,
      formatter: this.dataGrid.nativeElement.formatters.text,
    });
    // this.columns.push({
    //   id: '',
    //   name: '',
    //   field: '',
    //   resizable: true,
    //   reorderable: true,
    //   formatter: this.dataGrid.nativeElement.formatters.text,
    // });

    this.dataGrid.nativeElement.editable = true;
    this.dataGrid.nativeElement.rowHeight = 'sm';
    this.dataGrid.nativeElement.suppressRowClickSelection = true;
    this.dataGrid.nativeElement.rowSelection = 'multiple';

    this.dataGrid.nativeElement.columns = this.columns;
    this.dataGrid.nativeElement.data = sampleData;
  }
}
