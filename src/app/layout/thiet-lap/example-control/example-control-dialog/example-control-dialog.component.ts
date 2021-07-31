import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-example-control-dialog',
  templateUrl: './example-control-dialog.component.html',
  styleUrls: ['./example-control-dialog.component.scss']
})
export class ExampleControlDialogComponent implements OnInit {

  @Output() onClose = new EventEmitter<any>();

  public myForm: FormGroup;

  constructor(
    // private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.myForm = this.fb.group({
    //   valueAddedServiceCode: ['', [
    //   ]],
    //   valueAddedServiceName: ['', [
    //   ]],
    //   description: [''],
    // });
  }

  closeDialog(): void {
    this.onClose.emit();
  }
}
