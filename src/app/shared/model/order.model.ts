import {Product} from "./product.model";

export class Order {
    orderId:number;
    orderDate:string;//DD/MM/YY HH:MM
    updateDate:string=null;//DD/MM/YY HH:MM
    updatedBy:string=null;
    statusCode:number=0;//reference
    statusCodeOld:number=0;//reference
    invoiceNumber:string=null;
    annotation:string=null;
    deleteCredit:boolean=false;
    customerName:string;
    customerPhone:string;
    customerEmail:string;
    customerIdNumber:string;
    streetName:string;
    houseNumber:string;
    apartmentsNumber:string;
    settlementName:string;
    zipCode:string;
    groupAccess:boolean=true;
    readAccess:boolean=false;
    deliveryType:number=0;//reference
    deliveryCost:number;
    destinationcode1:number//reference
    invoice1:string;
    destinationcode2:number//reference
    invoice2:string;
    deliveryNumber:string;
    productsList:Product[];

    ccToken:string;
    validYear:number;//YYYY
    validMonth:string;//MM
    ccOwnerName:string;
    ccOwnerPersonId:string;
    paymentsNumber:number;

}
