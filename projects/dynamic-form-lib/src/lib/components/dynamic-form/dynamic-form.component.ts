import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup, Validators}    from '@angular/forms';
import {DynamicForm}                        from '../../types/interfaces/dynamic-form';
import {DynamicField}                       from '../../types/interfaces/dynamic-field';

@Component({
  selector   : 'form-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls  : ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() form: DynamicForm;
  @Input() comp: TemplateRef<any>;

  formGroup: FormGroup;

  constructor() {
    window['dynamicFormComponent'] = this;
  }

  ngOnInit(): void {


    const sectionControls = this.form.sections
                                .reduce((section_dict: any, section) => {
                                  const fieldControls = section.fields
                                                               .reduce((field_dict: any, field: DynamicField) => {
                                                                 const validatorArray = (field.validators || []);
                                                                 if (field.required) {
                                                                   validatorArray.push(Validators.required);
                                                                 }

                                                                 field_dict[field.propertyName] = new FormControl('', validatorArray);
                                                                 return field_dict;
                                                               }, {});

                                  section_dict[section.propertyName] = new FormGroup(fieldControls);
                                  return section_dict;
                                }, {});
    this.formGroup        = new FormGroup(sectionControls);


    // THIS CODE IS EQUIVALENT TO THE REDUCERS:
    /*
     const sections_dict = {};
     for (let section of this.form.sections) {
     const field_dict = {};
     for (let field of section.fields) {
     field_dict[field.propertyName] = new FormControl('');
     }
     sections_dict[section.propertyName] = new FormGroup(sections_dict)
     }
     this.formGroup = new FormGroup(sections_dict)
     */
  }

}
