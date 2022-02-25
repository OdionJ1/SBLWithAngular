import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'app-custom-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.scss'],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => CustomInputComponent),
          multi: true
        }
    ]
})


export class CustomInputComponent implements ControlValueAccessor{
    @Input() inputId: string;
    @Input() label: string;
    @Input() inputType: string;
    @Input() name: string
    @Input() required: boolean = false;
    @Input() hasError: boolean = false;
    @Input() errorMessage: string;
    @Input() isPasswordInput: boolean = false
    private _inputValue: string;

    @Input() set inputValue(value: string){
        this._inputValue = value.trimStart()
        this.propagateChange(this._inputValue)
    }

    get inputValue (): string {
        return this._inputValue
    }

    //See research notes for clarity
    propagateChange = (_: any) => {}

    public touched: () => void;
    

    togglePassword(){
        this.inputType = this.inputType === 'text'? 'password' : 'text'
    }

    onChange(event: Event){
        const value: string = (<HTMLInputElement>event.target).value
        this.inputValue = value
    }


    writeValue(value: string): void {
        if(!!value){
            this.inputValue = value
        }
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn
    }

    registerOnTouched(fn: any): void {
        this.touched = fn
    }
}