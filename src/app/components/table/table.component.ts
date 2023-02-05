import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {MessageService} from "../../shared/services/message.service";
import {IMessage} from "../../shared/types/message.interface";
import {ITableConfig} from "../../shared/types/table-config.interface";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent{
  @Input() tableConfig: ITableConfig
  @Output() changeActive: EventEmitter<number | null> = new EventEmitter<number | null>()

  active: number | null
  search: string = '';
  page: number = 1;
  limit = environment.limit
  constructor(public messageService: MessageService) {

  }

  onRowClick(id: number| null) {
    if(this.active === id) {
      this.active = null
      return this.changeActive.emit(null)
    }
    this.active = id
    this.changeActive.emit(id)
  }

  remove($event: any, id: number) {
    $event.stopPropagation()
    const confirmed = confirm('Are you sure to remove element?')
    if(confirmed) {
      this.messageService.delete(id).subscribe((m) => {
        this.messageService.$messages.next(this.messageService.$messages.value.filter(x => x.id !== id))
      })
    }

  }

  modelChange() {

  }

  getUrl() {
    return `?_page=${this.page}&_limit=${environment.limit}&q=${this.search}`
  }
}
