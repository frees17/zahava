import { Injectable } from '@angular/core';
import { Order } from './model/order.model';

@Injectable()
export class OrderService {

  constructor() { }
  getOrders(): Promise<Order[]> {
    return Promise.resolve(MYORDERS);
  }

  getOrderById(orderId:number):Promise<Order>{    
    return  Promise.resolve(MYORDERS.filter(x=>x.orderId==orderId)[0]);
  }
}

const MYORDERS: any[] = [
  { 
    orderId: 10001, 
    orderDate: '12/01/2017 12:34', 
    customerIdNumber:'302234432',
    customerName:'אלי כהן',
    customerPhone:'055-6788766',
    statusCode:1,
    statusCodeOld:5,
    productsList:[{id:1001,productMakat:'dd3453-2',featureCode:"aviv17",description:'סוללת גיבוי ירוקה 1000',productPrice:199,quantity:1},
              {id:1002,productMakat:'dd3345-4',featureCode:"add17",description:'כרטיס זיכרון 16G SSD',productPrice:199,quantity:2}
    ],
    deliveryCost:0,
    deleteCredit:true
    },
   { 
    orderId: 10002, 
    orderDate: '22/01/2017 23:00', 
    customerIdNumber:'099900009',
    customerName:'בני ברק',
    customerPhone:'052-2345436',
    statusCode:2,
    statusCodeOld:1,
    productsList:[{id:1001,productMakat:'dd3453-2',featureCode:"aviv17",description:'סוללת גיבוי ירוקה 1000',productPrice:199,quantity:1},
              {id:1002,productMakat:'dd3345-4',featureCode:"add17",description:'כרטיס זיכרון 16G SSD',productPrice:199,quantity:2}
    ],
    deliveryCost:20,
    deleteCredit:false
    },
     { 
    orderId: 10003, 
    orderDate: '24/01/2017 21:40', 
    customerIdNumber:'123456789',
    customerName:'בני ברק',
    customerPhone:'050-5987832',
    statusCode:2,
    statusCodeOld:1,
    productsList:[{id:1001,productMakat:'dd3453-2',featureCode:"aviv17",description:'סוללת גיבוי ירוקה 1000',productPrice:199,quantity:1},
              {id:1002,productMakat:'dd3345-4',featureCode:"add17",description:'כרטיס זיכרון 16G SSD',productPrice:199,quantity:2}
    ],
    deliveryCost:50,
    deleteCredit:true
    },
];
