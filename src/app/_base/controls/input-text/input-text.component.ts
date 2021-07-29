import {
    Component,
    forwardRef,
    OnInit,
    Output,
    EventEmitter,
    Input,
    ElementRef,
    SimpleChanges,
    OnChanges,
    AfterViewInit
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

declare var $;
@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputTextComponent),
            multi: true
        }
    ]
})
export class InputTextComponent implements OnInit, ControlValueAccessor, OnChanges, AfterViewInit {
    public controlValue: string | null = null;

    @Input() class: any = '';
    @Input() placeholder: any = '';
    @Input() disabled = false;
    @Input() hidden = false;
    @Input() readonly = false;
    @Input() autofocus = false;
    // tslint:disable-next-line:no-output-rename
    @Output('onChange') eventOnChange = new EventEmitter<any>();
    // tslint:disable-next-line:no-output-rename
    @Output('onBlur') eventOnBlur = new EventEmitter<void>();
    // tslint:disable-next-line:no-output-rename
    @Output('onUnBlur') eventOnUnBlur = new EventEmitter<void>();
    // tslint:disable-next-line:no-output-rename
    @Output('onClear') eventOnClear = new EventEmitter<void>();
    // tslint:disable-next-line:no-output-rename
    @Output('onKeyUp') eventOnKeyUp = new EventEmitter<any>();
    // tslint:disable-next-line:no-output-rename
    @Output('onKeyEnter') eventOnKeyEnter = new EventEmitter<void>();

    eventBaseChange = (_: any) => {
    }
    eventBaseTouched = () => {
    }

    constructor(
        private el: ElementRef
    ) {
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
        this.eventOnUnBlur.emit();
    }

    onChange(): void {
        this.eventBaseChange(this.controlValue);
        this.eventOnChange.emit(this.controlValue);
    }

    onKeyUp(value): void {
        this.eventOnKeyUp.emit(value);
        if (value.keyCodeMap === 13) {
            console.log('enter');
            this.eventOnKeyEnter.emit();
        }
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    onClear(): void {
        this.controlValue = '';
        this.eventBaseChange(this.controlValue);
        this.eventOnChange.emit(this.controlValue);
        this.eventOnClear.emit();
    }

}
