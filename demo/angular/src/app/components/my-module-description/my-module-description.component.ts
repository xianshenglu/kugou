import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-module-description',
  templateUrl: './my-module-description.component.html',
  styleUrls: ['./my-module-description.component.scss'],
})
export class MyModuleDescriptionComponent implements OnInit {
  @Input() description = '';
  showMore = false;
  constructor() {}

  ngOnInit(): void {}
}
