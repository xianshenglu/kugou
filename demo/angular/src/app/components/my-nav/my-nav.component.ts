import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss'],
})
export class MyNavComponent implements OnInit {
  navs = [
    {
      text: '新歌',
      name: 'new',
      path: '/',
    },
    {
      text: '排行',
      name: 'rank',
      path: '/rank/list',
    },
    {
      text: '歌单',
      name: 'song',
      path: '/song/list',
    },
    {
      text: '歌手',
      name: 'singer',
      path: '/singer/category',
    },
  ];

  activeIndex = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setActiveIndexByPathname(this.router.url);
    // todo need unsubscribe?
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      this.setActiveIndexByPathname(event.url);
    });
  }

  setActiveIndexByPathname(pathname: string) {
    const index = this.navs.findIndex((nav) => nav.path === pathname);
    if (index < 0) {
      return;
    }
    this.activeIndex = index;
  }
}
