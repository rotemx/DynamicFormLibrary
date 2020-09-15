import {DynamicField} from './dynamic-field';

export interface DynamicSection {
    propertyName: string
    title: string
    fields: DynamicField[];
    okFn?: () => Promise<any>
}
