import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../../_base/services/message.service';
import { DialogService } from '../../../_base/services/dialog.service';

@Component({
  selector: 'app-example-control',
  templateUrl: './example-control.component.html',
  styleUrls: ['./example-control.component.scss']
})
export class ExampleControlComponent implements OnInit {

  public myForm: FormGroup;
  myFormValueText: string;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      text: ['full name', [Validators.required]],
      number: [null, [Validators.required]],
    });
  }

  async submitForm(): Promise<void> {
    this.myFormValueText = JSON.stringify(this.myForm.getRawValue());
    console.log(this.myForm.getRawValue());
  }

  onDisable(): void {
    this.myForm.disable();
  }

  onEnable(): void {
    this.myForm.enable();
  }
}
