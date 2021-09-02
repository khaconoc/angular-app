import {
  Component,
  OnInit,
  ViewEncapsulation,
  forwardRef,
  AfterViewInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  SimpleChanges
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

declare let $;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'input-float',
  templateUrl: './input-float.component.html',
  styleUrls: ['./input-float.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFloatComponent),
      multi: true,
    }
  ]
})
export class InputFloatComponent implements OnInit, AfterViewInit, ControlValueAccessor, OnChanges {
  constructor(
    private el: ElementRef
  ) {
  }

  @Input() class: any = '';
  @Input() placeholder: any = '';
  @Input() disabled = false;
  @Input() hidden = false;
  @Input() readonly = false;
  @Input() min: number;
  @Input() max: number;
  @Input() step = 1;
  @Input() symbol = ' ';
  @Input() prefix = '';
  @Input() decimalLimit = 3;
  @Input() integerLimit: number = null;
  // tslint:disable-next-line:no-output-rename
  @Output('onChange') eventOnChange = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-rename
  @Output('onBlur') eventOnBlur = new EventEmitter<void>();
  // tslint:disable-next-line:no-output-rename
  @Output('onUnBlur') eventOnUnBlur = new EventEmitter<void>();

  // tslint:disable-next-line:member-ordering
  public controlValue: number | null = null;
  public maskFomat = createNumberMask({
    prefix: this.prefix,
    suffix: '',
    allowNegative: true,
    allowDecimal: true,
    decimalLimit: this.decimalLimit,
    integerLimit: this.integerLimit,
    thousandsSeparatorSymbol: this.symbol
  });
  eventBaseChange = (_: any) => {
  }
  eventBaseTouched = () => {
  }

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
    this.eventBaseTouched();
    this.eventOnBlur.emit();
  }

  onUnBlur(): void {
    if (this.getValue() > this.max) {
      this.controlValue = this.max;
      this.onChange();
    }
    if (this.getValue() < this.min) {
      this.controlValue = this.min;
      this.onChange();
    }
    this.eventOnUnBlur.emit();
  }

  onChange(): void {
    const val = this.getValue();
    this.eventBaseChange(+val);
    this.eventOnChange.emit(+val);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  pushValue(): void {
    const val = this.getValue();
    if (this.max && +val + this.step > this.max) {
      this.controlValue = this.max;
      this.onChange();
      return;
    }
    this.controlValue = +val + this.step;
    this.onChange();
  }

  minusValue(): void {
    const val = this.getValue();
    if (+val <= this.min) {
      return;
    }
    if (+val <= this.step) {
      this.controlValue = this.min;
      this.onChange();
      return;
    }
    this.controlValue = +val - this.step;
    this.onChange();
  }

  private getValue(): any {
    let val: any = this.controlValue;
    if (!val) {
      val = '';
    }
    val = val.toString().replace(new RegExp(this.symbol, 'g'), '');
    if (this.prefix !== '') {
      val = val.replace(new RegExp(this.prefix, 'g'), '');
    }
    return +val;
  }
}
