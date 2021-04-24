import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-module-title',
  templateUrl: './my-module-title.component.html',
  styleUrls: ['./my-module-title.component.scss'],
})
export class MyModuleTitleComponent implements OnInit {
  @Input() title = '';
  @Output() titleClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
