import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo{
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: 'panel', title: 'Painel', icon: 'now-ui-icons files_box', class: ''},
    {path: 'orders', title: 'Contratos', icon: 'now-ui-icons files_paper', class: ''},
    {path: 'customers', title: 'Clientes', icon: 'now-ui-icons business_bank', class: ''},
    {path: 'updates', title: 'Programas', icon: 'now-ui-icons tech_laptop', class: ''},
    {path: 'update-history', title: 'Histórico de Atualizações', icon: 'now-ui-icons ui-1_calendar-60', class: ''},
    {path: 'update-blocked', title: 'Histórico de Bloqueios', icon: 'now-ui-icons ui-1_calendar-60', class: ''},
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    menuItems: any[]

  constructor() { }

  ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem)
  }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

}
