import { Component, OnDestroy, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor() {}

  public title: string = 'MULTIREPO Component';

  public IsMenuCollapsed: boolean = false;

  public menus: Array<PoMenuItem> = [];

  ngOnInit(): void {
    this.LoadMenus();
  }

  ngOnDestroy(): void {
    console.log('MASTER App Method not implemented.');
  }

  public LoadMenus() {
    this.menus = [];

    this.menus.push(
      {
        label: 'Serviços Globais',
        shortLabel: 'GLB',
        link: '/globais',
        icon: 'po-icon-balance',
      },
      {
        label: 'Educacional',
        shortLabel: 'Edu',
        link: '/educacional',
        icon: 'po-icon-finance-secure',
      }
    );
  }
}
