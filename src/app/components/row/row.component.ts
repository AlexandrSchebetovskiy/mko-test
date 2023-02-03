import {Component, Input} from '@angular/core';
import {IMessage} from "../../shared/types/message.interface";
import {MessageService} from "../../shared/services/message.service";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent {

  @Input() message!: IMessage

  constructor(public messageService: MessageService) {
  }
}
