import {Component, Input} from '@angular/core';
import {IMessage} from "../../shared/types/message.interface";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent {

  @Input() data?: IMessage
}
