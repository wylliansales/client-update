import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { PanelModule } from './panel/panel.module' 


import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { FooterComponent } from './footer/footer.component'
import {ROUTES} from './routes'
import { PanelComponent } from './panel/panel.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './orders/order-list/order-list.component'



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    PanelComponent,
    LoginComponent,
    OrdersComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    PanelModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
