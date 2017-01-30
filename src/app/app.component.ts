import { Component, OnInit, NgModule, Input, ViewChild } from '@angular/core';
import { OrderService } from './shared/order.service';
import { ReferenseService } from './shared/referense.service';
import { Order } from './shared/model/order.model';
import { OrderModalComponent } from './order-modal/order-modal.component'
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';



@Component({
  selector: 'order-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit {
  orderList: Order[] = [];
  theOrder: any;
  title: string = 'הזמנות';
  opened: Boolean = false;
  source: LocalDataSource;

  @ViewChild(OrderModalComponent)
  private orderModal: OrderModalComponent;

  settings = {
    hideSubHeader: false,
    actions: {
      add: false,
      delete: false,
      edit: false
    },
    columns: {
      orderId: {
        title: 'מספר הזמנה',
        filter: true,
        editable: false
      },
      orderDate: {
        title: 'תאריך',
        filter: true,
        editable: false
      },
      customerIdNumber: {
        title: 'ת.ז של מזמין',
        filter: false,
        editable: false
      },
      customerName: {
        title: 'שם מזמין',
        filter: false,
        editable: false
      },
      customerPhone: {
        title: 'טלפון',
        filter: false,
        editable: false
      },
      statusCode: {
        title: 'סטאטוס',
        filter: false,
        editable: false
      },

    }

  };



  constructor(private _orderservice: OrderService, private _refService: ReferenseService) {

  }

  ngOnInit() {
    this._refService.initStatusRef();
    this._orderservice.getOrders().then((orders) => {
      this.orderList = orders;
      this.source = new LocalDataSource(orders);

    }).catch((error) => {
      console.error(error);
    });

  }

  orderOpen(data) {
    this.theOrder = data.data;
    this.orderModal.open(this.theOrder.orderId);
  }

  onSearch(query: string = ''): void {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'orderId',
        search: query
      },
      {
        field: 'orderDate',
        search: query
      },
      {
        field: 'customerData',
        search: query
      },
      {
        field: 'customerPhone',
        search: query
      },
      {
        field: 'customerIdNumber',
        search: query
      },
      {
        field: 'customerName',
        search: query
      }
    ], false);
  }
}
