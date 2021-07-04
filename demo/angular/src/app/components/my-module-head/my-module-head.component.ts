import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-module-head',
  templateUrl: './my-module-head.component.html',
  styleUrls: ['./my-module-head.component.scss'],
})
export class MyModuleHeadComponent {
  @Input() moduleHeadInfo: { name: string; imgUrl: string } = {
    name: '',
    imgUrl: '',
  };
}
