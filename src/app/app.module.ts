import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "./shared/services/message.service";
import {HeaderComponent} from "./components/header/header.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import { TableComponent } from './components/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormatPipe} from "./shared/format.pipe";
import {DatePipe} from "@angular/common";
import { FormComponent } from './components/form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TableContentComponent } from './components/table-content/table-content.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TableComponent,
    FormatPipe,
    FormComponent,
    TableContentComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    MessageService,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
