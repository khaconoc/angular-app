import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GenCodeService } from '../../../_share/services/gen-code.service';
import { MessageService } from '../../../_base/services/message.service';

interface IGen {
  status: string;
  payload: string[];
}
@Component({
  selector: 'app-gen-code',
  templateUrl: './gen-code.component.html',
  styleUrls: ['./gen-code.component.scss']
})
export class GenCodeComponent implements OnInit {

  myForm: FormGroup;
  info: string;

  constructor(
    private fb: FormBuilder,
    private genCodeService: GenCodeService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      path: ['F:\\test\\Domain\\Application\\Account\\AccountCrud\\Commands'],
      action: ['Create'],
      domain: ['Account']
    });
  }

  async onSubmit(): Promise<void> {
    const data = this.myForm.getRawValue();
    const rs = await this.genCodeService.post<IGen>(data, 'gen-net-core');
    if (rs.ok) {
      this.info = rs.result.payload.join('\n');
      this.messageService.showMessageSuccess('', 'gen code thanh cong');
    }
  }
}
