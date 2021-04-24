import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-module-title',
  templateUrl: './my-module-title.component.html',
  styleUrls: ['./my-module-title.component.scss'],
})
export class MyModuleTitleComponent implements OnInit {
  @Input() title = '';
  constructor() {}

  ngOnInit(): void {}
}
