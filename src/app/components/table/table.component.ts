import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageService} from "../../shared/services/message.service";
import {Observable, Subscription} from "rxjs";
import {IMessage} from "../../shared/types/message.interface";
import {IRowConfig, ITableConfig} from "../../shared/types/table-config.interface";
import {DatePipe} from "@angular/common";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{
  @Input() url!: string
  @Input() tableConfig: ITableConfig
  @Output() changeActive: EventEmitter<number> = new EventEmitter<number>()

  messages: IMessage[]
  active: number
  constructor(public messageService: MessageService) {

  }


  onRowClick(id: number) {
    if(this.active === id) {
      return  console.log('active')
    }
    this.active = id
    this.changeActive.emit(id)
  }

  remove($event: any, id: number) {
    $event.stopPropagation()
    this.messageService.delete(id).subscribe((m) => {
      this.messageService.$messages.next(this.messageService.$messages.value.filter(x => x.id !== id))
    })
  }
}
