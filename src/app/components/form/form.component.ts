import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
    const [date, time] = this.initialValues.date.split(' ')
    console.log(this.initialValues.date)
    console.log(date, time)
    this.form = new FormGroup({
      name: new FormControl(this.initialValues.name, Validators.required),
      date: new FormControl(date, Validators.required),
      time: new FormControl(time, Validators.required),
      message: new FormControl(this.initialValues.message, Validators.required),
    })
  }

  onSubmit() {
    console.log(this.form.value)

    if(this.form.valid){
      const formData = {
        name: this.form.value.name,
        message: this.form.value.message,
        date: this.form.value.date+' '+this.form.value.time
      }
      this.modal.close(formData)
    }
  }
}
