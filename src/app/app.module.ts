import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { OrderService } from './shared/order.service';
import { ReferenseService} from './shared/referense.service';
import { ModalModule } from 'ng2-modal';
import { Ng2SmartTableModule } from 'ng2-smart-table'
import { OrderModalComponent } from './order-modal/order-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    OrderModalComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule,
    Ng2SmartTableModule
    
  ],
  providers: [OrderService,ReferenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
