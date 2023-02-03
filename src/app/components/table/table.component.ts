import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from "../../shared/services/message.service";
import {Observable} from "rxjs";
import {IMessage} from "../../shared/types/message.interface";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  @Input() url!: string

  $messages: Observable<IMessage[]>

  constructor(public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.$messages = this.messageService.fetchAll()
  }


}
