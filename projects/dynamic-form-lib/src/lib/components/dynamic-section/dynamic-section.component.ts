import {Component, forwardRef, HostBinding, Input, TemplateRef} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR}     from '@angular/forms';
import { FieldTypes } from '../../types/enums/field-types';
import { DynamicSection } from '../../types/interfaces/dynamic-section';

@Component({
  selector   : 'form-dynamic-section',
  templateUrl: './dynamic-section.component.html',
  styleUrls  : ['./dynamic-section.component.css'],
  providers  : [
    {
      provide    : NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicSectionComponent),
      multi      : true
    }
  ]
})
export class DynamicSectionComponent implements ControlValueAccessor {
  @HostBinding('class.invalid') get invalid() { return this.formGroup.touched && this.formGroup.invalid; }
  @Input() comp: TemplateRef<any>;


  change: any = () => {
  };
  touch: any  = () => {
  };

  registerOnChange(fn: (_: any) => void): void {
    // console.log(fn.toString());
    this.change = fn;
  }

  registerOnTouched(fn: (_: any) => void): void {
    this.touch = fn;
  }

  FieldTypes = FieldTypes;

  @Input() section: DynamicSection;
  @Input() formGroup: FormGroup;

  constructor() {
    window['dynamicSectionComponent'] = this;
  }

  ngOnInit(): void {

    // this reduce creates:
    // {
    //     firstName:new FormControl(''),
    //     lastName:new FormControl(''),
    //     favoriteColor:new FormControl('')
    // }

    // FormGroups be like:
    // this.formGroup = new FormGroup({
    //   firstName : new FormControl(''),
    //   lastName : new FormControl(''),
    // });


    // this.formGroup.valueChanges
    //     .subscribe(data => {
    // console.log('data');
    // console.log(data);
    // });

  }

  writeValue(value: string[]): void {
    if (this.formGroup) {
      this.formGroup.setValue(value);
    }
  }
}
