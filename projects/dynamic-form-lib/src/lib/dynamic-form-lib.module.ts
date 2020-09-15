import {NgModule}                         from '@angular/core';
import {SaveButtonComponent}              from './save-button/save-button.component';
import {DynamicFormComponent}             from './components/dynamic-form/dynamic-form.component';
import {DynamicSectionComponent}          from './components/dynamic-section/dynamic-section.component';
import {BrowserModule}                    from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BlueBoxComponent}                 from './components/blue-box/blue-box.component';


const components = [
    DynamicFormComponent,
    DynamicSectionComponent,
    SaveButtonComponent,
    BlueBoxComponent
];

@NgModule({
    declarations: components,
    imports     : [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        
    ],
    exports     : components
})
export class DynamicFormLibModule {
}
