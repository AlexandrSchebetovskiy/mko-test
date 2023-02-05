import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {MessageService} from "../../shared/services/message.service";
import {Subscription} from "rxjs";
import {IMessage} from "../../shared/types/message.interface";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnChanges, OnDestroy{
  @Input() id?: number | null
  message: IMessage | null

  sub: Subscription
  constructor(private messageService: MessageService, private modalService: NgbModal) {
  }


  open(content:any) {
    this.modalService.open(content).result.then(
      (result) => {
        this.messageService.update(result, this.message!.id).subscribe((m) => {
          const idx = this.messageService.$messages.value.findIndex((x) =>x.id === m.id)
          const newArr = [...this.messageService.$messages.value]
          newArr[idx] = m
          this.message = m
          this.messageService.$messages.next(newArr)
        })
      }
    )
  }
  remove($event: any, id: number) {
    $event.stopPropagation()
    const confirmed = confirm('Are you sure to remove element?')
    if(confirmed) {
      this.messageService.delete(id).subscribe((m) => {
        this.messageService.$messages.next(this.messageService.$messages.value.filter(x => x.id !== id))
        this.message = null
      })
    }

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.id.currentValue ) {
      this.sub = this.messageService.getById(changes.id.currentValue).subscribe((m) => {
        this.message = m
      })
    } else {
      this.message = null
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
