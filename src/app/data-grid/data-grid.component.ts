import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import type IdsDataGrid from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid';
import type { IdsDataGridColumn } from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid-column';
import sampleData from './sample-data.json';
import unformattedJson from './unformatted-springboot.json';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements AfterViewInit, OnInit {
  constructor() {}

  @ViewChild('dataGridEditable') dataGrid!: ElementRef<IdsDataGrid>;
  columns: IdsDataGridColumn[] = [];
  formattedData: { [key: string]: any }[] = [];

  maxObjectsInCell = 0;

  ngOnInit(): void {
    const aUnicode = 97;

    // get max number of columns to push in data grid component
    // for (let row of unformattedJson.rows) {
    //   if (row.cells.length > this.maxObjectsInCell) {
    //     this.maxObjectsInCell = row.cells.length;
    //   }
    // }

    this.maxObjectsInCell = unformattedJson.maxColumn;

    // push all columns to datagrid columns
    for (let i = 0; i < this.maxObjectsInCell; i++) {
      let text = String.fromCharCode(i + aUnicode);
      this.columns.push({
        id: text,
        name: text,
        field: text,
        sortable: true,
        resizable: true,
        reorderable: true,

        cssPart: (row: number, cellIndex: number) => {
          switch (unformattedJson.rows[row].rowType) {
            case 'exec':
              return 'exec-cell';
            case 'context':
              return 'context-cell';
            case 'business_object':
              return 'business-object-cell';
            case 'action':
              if (cellIndex === 3) {
                if (
                  unformattedJson.rows[row].cells[cellIndex - 1].displayValue
                    .length === 0
                ) {
                  return 'valid-cell';
                } else {
                  return 'invalid-cell';
                }
              } else {
                return 'white-cell';
              }
            default:
              return 'white-cell';
          }
        },

        // editor: {
        //   type: 'input',
        //   inline: true,
        //   editorSettings: {
        //     autoselect: true,
        //     dirtyTracker: true,
        //   },
        // },
      });
    }

    // reformat raw data
    for (let row of unformattedJson.rows) {
      let formattedRow: { [key: string]: any } = {};
      for (let cell of row.cells) {
        formattedRow[String.fromCharCode(Number(cell.id) - 1 + aUnicode)] =
          cell.displayValue;
      }
      this.formattedData.push(formattedRow);
    }
  }

  ngAfterViewInit(): void {
    this.columns.unshift({
      id: 'selectionCheckbox',
      name: 'selection',
      sortable: false,
      resizable: false,
      formatter: this.dataGrid.nativeElement.formatters.selectionCheckbox,
      align: 'center',
    });

    this.dataGrid.nativeElement.editable = true;
    this.dataGrid.nativeElement.rowHeight = 'sm';
    this.dataGrid.nativeElement.suppressRowClickSelection = true;
    this.dataGrid.nativeElement.rowSelection = 'multiple';

    this.dataGrid.nativeElement.columns = this.columns;
    this.dataGrid.nativeElement.data = this.formattedData;
  }
}
