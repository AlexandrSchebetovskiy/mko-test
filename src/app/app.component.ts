import {Component, OnInit} from '@angular/core';
import {tableConfig} from "../../table-config";
import {IMessage} from "./shared/types/message.interface";
import {MessageService} from "./shared/services/message.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mko-test';
  current: number
  tableConfig = tableConfig
  constructor(public messageService: MessageService) {

  }
  ngOnInit(): void {
    this.messageService.fetchAll().subscribe((messages) => {
      this.messageService.$messages.next(messages)
    })
  }
  getUrl(){
    return '/messages'
  }

  onActiveChange(id: number) {
    this.current = id
  }

}
