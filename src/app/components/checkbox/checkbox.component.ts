import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() isChecked = '';

  constructor() { }

  ngOnInit(): void {
  }

}
