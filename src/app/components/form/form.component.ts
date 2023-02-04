import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ICreateMessageRequest} from "../../shared/types/create-message-request.interface";
import {IMessage} from "../../shared/types/message.interface";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  @Input() initialValues: IMessage = {name: '', date: '', message: '', id: 0}
  @Input() modal: any
  form: FormGroup


  ngOnInit(): void {
    this.initializeForm()
  }

  private initializeForm() {
    this.form = new FormGroup({
      name: new FormControl(this.initialValues.name, Validators.required),
      date: new FormControl(this.initialValues.date, Validators.required),
      message: new FormControl(this.initialValues.message, Validators.required),
    })
  }

  onSubmit() {
    if(this.form.valid){
      this.modal.close(this.form.value)
    }
  }
}
