import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "./shared/services/message.service";
import {HeaderComponent} from "./components/header/header.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import { TableComponent } from './components/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RowComponent } from './components/row/row.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TableComponent,
    RowComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
