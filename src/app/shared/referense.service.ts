import { Injectable } from '@angular/core';

@Injectable()
export class ReferenseService {
public statusRef:any[];
constructor() { }
 initStatusRef() {
   this.statusRef=STATUS_REF;
  }
}

const STATUS_REF: any[]=[
    {value:0,name:'הזמנה פתוחה'},
    {value:1,name:'הזמנה בטיפול'},
    {value:2,name:'הזמנה סגורה'},
    {value:3,name:'הזמנה תקולה'},
    {value:4,name:'הזמנה סופקה'},
    {value:5,name:'הזמנה בוטלה'}
]