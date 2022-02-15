import { Component, OnDestroy, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy{

  public title: string = 'MultiRepo Home Component';

  public menus: Array<PoMenuItem> = [];

  ngOnInit(): void {
    this.LoadMenus();
  }

  ngOnDestroy(): void {
    console.log('MASTER Home Method not implemented.');
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
