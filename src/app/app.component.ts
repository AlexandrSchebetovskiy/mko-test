import { Component } from '@angular/core';
import {tableConfig} from "../../table-config";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mko-test';
  tableConfig = tableConfig
  getUrl(){
    return '/messages'
  }
}
