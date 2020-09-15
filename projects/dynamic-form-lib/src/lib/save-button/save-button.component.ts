import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'form-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent implements OnInit {
  @Input() disabled:boolean;
  
  @Output() click:EventEmitter<void> = new EventEmitter<void>()
  
  @HostBinding('attr.disabled') get _disabled() {
    return this.disabled
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
