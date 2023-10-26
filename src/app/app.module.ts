import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { TreeComponent } from './tree/tree.component';
import { SwappableTabsComponent } from './swappable-tabs/swappable-tabs.component';

@NgModule({
  declarations: [AppComponent, DataGridComponent, TreeComponent, SwappableTabsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
