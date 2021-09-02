// tslint:disable-next-line:max-line-length
import { Component, OnInit, ViewEncapsulation, forwardRef, AfterViewInit, OnChanges, Input, Output, EventEmitter, ElementRef, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

declare let $;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioComponent),
      multi: true,
    }]
})
export class InputRadioComponent implements OnInit, AfterViewInit, ControlValueAccessor, OnChanges {

  public controlValue: string | null = null;
  private isFocus: boolean;

  @Input() class: any = '';
  @Input() disabled = false;
  @Input() items: any[] = [];
  // tslint:disable-next-line:no-output-rename
  @Output('onChange') eventOnChange = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-rename
  @Output('onBlur') eventOnBlur = new EventEmitter<void>();
  // tslint:disable-next-line:no-output-rename
  @Output('onUnBlur') eventOnUnBlur = new EventEmitter<void>();
  eventBaseChange = (_: any) => { };
  eventBaseTouched = () => { };

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngAfterViewInit(): void {
    // $(this.el.nativeElement).removeClass(this.class);
  }

  writeValue(obj: any): void {
    this.controlValue = obj;
  }

  registerOnChange(fn: any): void {
    this.eventBaseChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.eventBaseTouched = fn;
  }

  onBlur(): void {
    this.isFocus = true;
    this.eventBaseTouched();
    this.eventOnBlur.emit();
  }

  onUnBlur(): void {
    setTimeout(() => {
      this.isFocus = false;
      this.eventOnUnBlur.emit();
    }, 100);
  }

  onChange(): void {
    // if (!this.isFocus) return;
    this.eventBaseChange(this.controlValue);
    this.eventOnChange.emit(this.controlValue);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
