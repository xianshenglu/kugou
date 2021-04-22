import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-module-head',
  templateUrl: './my-module-head.component.html',
  styleUrls: ['./my-module-head.component.scss'],
})
export class MyModuleHeadComponent implements OnInit {
  @Input() moduleHeadInfo: { name: string; imgUrl: string } = {
    name: '',
    imgUrl: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
