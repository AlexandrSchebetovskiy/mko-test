import {Component, OnInit} from '@angular/core';
import {tableConfig} from "../../table-config";
import {IMessage} from "./shared/types/message.interface";
import {MessageService} from "./shared/services/message.service";
import {KeyValue} from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'mko-test';
  current: number | null
  tableConfig = tableConfig
  constructor(public messageService: MessageService) {
  }

  onActiveChange(id: number | null) {
    this.current = id
  }

}
