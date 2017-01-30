import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Modal } from 'ng2-modal';
import { Order } from '../shared/model/order.model'
import { Product } from '../shared/model/product.model';
import { OrderService } from '../shared/order.service';
import { ReferenseService } from '../shared/referense.service';

@Component({
  selector: 'order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {
  @ViewChild(Modal)
  private modalComponent: Modal;

  @Input() orderId: number;

  private isHandling: boolean = true;
  private theOrder: Order = new Order();
  private totalCost: number = 0;
  private statusesRef: any[] = [];
  private oldStatusVal: string = "";
  private tmpStatus: number;

  constructor(private _orderservice: OrderService, private _referenseService: ReferenseService) { }


  ngOnInit() {
    this.statusesRef = this._referenseService.statusRef;
  }

  open(orderId: number) {
    this.totalCost=0;
    this._orderservice.getOrderById(orderId).then(data => {
      this.theOrder = data
      if (this.theOrder.orderId) {
        this.isHandling = this.theOrder.deliveryType == 0 || !this.theOrder.deliveryType;
        this.theOrder.productsList.forEach((element) => {
          this.totalCost += element.productPrice * element.quantity;
          this.oldStatusVal = this.getStatusName(this.theOrder.statusCodeOld);
          this.tmpStatus = this.theOrder.statusCode;        
        });
        this.totalCost+=this.theOrder.deliveryCost;
        this.modalComponent.open();
      }
    });
  }
 
  getStatusName(val: number): string {
    if (val) {
      return this.statusesRef.filter(obj => obj.value == val)[0].name;
    }
    return "";
  }

  setDeleteCredit(ischecked){
    this.theOrder.deleteCredit=ischecked;
  }

  saveOrder() {
    //If status is changed
    if (this.theOrder.statusCode != this.tmpStatus) {
      this.theOrder.statusCodeOld = this.tmpStatus;
    }
    console.debug("שמירת הזמנה");
  }

  close(){
    this.theOrder=new Order();
    this.modalComponent.close();
  }
}
