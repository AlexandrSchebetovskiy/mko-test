import {Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges} from '@angular/core';
import {MessageService} from "../../shared/services/message.service";
import {ITableConfig} from "../../shared/types/table-config.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent implements OnChanges, OnDestroy{

  active: number| null
  @Output() changeActive: EventEmitter<number | null> = new EventEmitter<number | null>()
  @Input() tableConfig: ITableConfig
  @Input() url: string
  private sub: Subscription;
  constructor(public messageService: MessageService) {
  }


  ngOnChanges(changes: SimpleChanges) {
    const urlChanged =
      changes.url.currentValue !== changes.url.previousValue
    if (urlChanged) {
      this.sub = this.messageService.fetchAll(this.url).subscribe((messages) => {
        this.messageService.$messages.next(messages)
      })
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  onRowClick(id: number) {
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
}
