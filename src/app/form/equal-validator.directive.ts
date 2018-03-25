import { AfterViewInit, Directive, forwardRef, Input, StaticProvider } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export class EqualValidator {
  static isEqual ( compare: any ): ValidatorFn {
    return ( control: AbstractControl ): ValidationErrors | null => {
      if ( control.value === null || compare === null ) {
        return null;
      }
      return compare !== control.value ? { 'equal': { 'is': control.value, 'should': compare } } : null;
    };
  }
}

export const EQUAL_VALIDATOR: StaticProvider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EqualValidatorDirective),
  multi: true
};

@Directive ( {
  selector: '[msgEqualValidator][formControlName],[msgEqualValidator][formControl],[msgEqualValidator][ngModel]',
  providers: [EQUAL_VALIDATOR]
} )
export class EqualValidatorDirective implements Validator, AfterViewInit {

  get msgEqualValidator (): any {
    return this._msgEqualValidator;
  }

  @Input ()
  set msgEqualValidator ( value: any ) {
    this._msgEqualValidator = value;
    if (this._onChange) {
      this._onChange();
    }
  }

  private _msgEqualValidator: any;
  private _onChange: () => void;

  constructor () {
  }

  validate ( c: AbstractControl ): ValidationErrors | null {
    return this.msgEqualValidator ? EqualValidator.isEqual( this.msgEqualValidator ) (c) : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }

  ngAfterViewInit (): void {
    if (this._onChange) {
      this._onChange();
    }
  }
}
