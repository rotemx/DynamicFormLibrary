import {FieldTypes}  from '../enums/field-types';
import {ValidatorFn} from '@angular/forms';

export interface DynamicField {
  type: FieldTypes
  propertyName: string;
  label: string;
  placeholder?: string;
  validators?: ValidatorFn[]
  required?: boolean
}

