import {Component, ComponentFactoryResolver, ComponentRef, Injector, ViewChild, ViewContainerRef} from '@angular/core';
import {FieldTypes}                                                                               from '../../../dynamic-form-lib/src/lib/types/enums/field-types';
import {DynamicForm}                                              from '../../../dynamic-form-lib/src/lib/types/interfaces/dynamic-form';
import {BlueBoxComponent}                                         from '../../../dynamic-form-lib/src/lib/components/blue-box/blue-box.component';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.css']
})
export class AppComponent {
    title = 'form-test';
    @ViewChild('temp', {static: true}) temp;
    @ViewChild('container', {read: ViewContainerRef, static:true}) parent:ViewContainerRef;
    
    constructor(
        public injector: Injector,
        public cfr: ComponentFactoryResolver) {
        window['AppComponent'] = this;
    }
    
    ngOnInit() {
        let
            factory = this.cfr.resolveComponentFactory(BlueBoxComponent);
        
        this.parent.createComponent(factory)
    }
    
    
    productForm: DynamicForm = {
        title   : 'Product Form',
        sections: [
            {
                propertyName: 'general',
                title       : 'General',
                fields      : [
                    {
                        propertyName: 'id',
                        label       : 'Product Id',
                        placeholder : 'enter ID',
                        type        : FieldTypes.Text,
                        required    : true
                    },
                    {
                        propertyName: 'name',
                        label       : 'Product Name',
                        placeholder : 'enter name',
                        type        : FieldTypes.Text,
                        required    : true
                    },
                    {
                        propertyName: 'price',
                        label       : 'Price',
                        placeholder : 'enter price',
                        type        : FieldTypes.Number
                    }
                ]
            },
            {
                propertyName: 'details',
                title       : 'Product Details',
                fields      : [
                    {
                        propertyName: 'count',
                        label       : 'count',
                        placeholder : 'enter count',
                        type        : FieldTypes.Number
                    },
                    {
                        propertyName: 'rating',
                        label       : 'Rating',
                        placeholder : 'enter rating',
                        type        : FieldTypes.Number
                    },
                    {
                        propertyName: 'color',
                        label       : 'Color',
                        placeholder : 'choose color',
                        type        : FieldTypes.Color
                    },
                    {
                        propertyName: 'custom',
                        label       : 'Cat Phrase',
                        type        : FieldTypes.Custom
                    }
                
                ]
            }
        ]
    };
    
}
