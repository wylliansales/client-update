import {Routes} from '@angular/router';

import {PanelComponent} from './panel/panel.component';
import {BlockedComponent} from './panel/blocked/blocked.component';
import {UpdateHistoryComponent} from './panel/update-history/update-history.component';
import {BlockedHistoryComponent} from './panel/blocked-history/blocked-history.component';
import {LastUpdateComponent} from './panel/last-update/last-update.component';
import {LoginComponent} from './login/login.component'
import {OrdersComponent} from './orders/orders.component'


export const ROUTES: Routes = [
    {path: 'panel', component: PanelComponent,
        children: [
            {path: '', redirectTo: 'blocked', pathMatch: 'full'},
            {path: 'blocked', component: BlockedComponent},            
            {path: 'update-history', component: UpdateHistoryComponent},
            {path: 'blocked-history', component: BlockedHistoryComponent},
            {path: 'last-update', component: LastUpdateComponent},

        ]},
    {path: 'login', component: LoginComponent},
    {path: 'orders', component: OrdersComponent},

]