import {Component, EventEmitter, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MessageService} from "../../shared/services/message.service";
import {IMessage} from "../../shared/types/message.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private modalService: NgbModal, private messageService: MessageService) {}

  @Output() onAdd: EventEmitter<IMessage> = new EventEmitter<IMessage>()

  open(content:any) {
    this.modalService.open(content).result.then(
      (result) => {
        this.messageService.create(result).subscribe((m) => {
          this.messageService.$messages.next(this.messageService.$messages.value.concat(m))
        })
      }
    )
  }
}
