import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from "../../shared/services/message.service";
import {Observable} from "rxjs";
import {IMessage} from "../../shared/types/message.interface";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  @Input() id?: number
  $message: Observable<IMessage>
  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    if(this.id){
      this.$message = this.messageService.getById(this.id)
      console.log(this.id);
      this.$message.subscribe((message) =>console.log(message) )
    }
  }

}
