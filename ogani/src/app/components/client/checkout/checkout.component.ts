import { Component, OnInit } from '@angular/core';
import { faBars, faHeart, faPhone, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { CartService } from '../../../_service/cart.service';
import { StorageService } from '../../../_service/storage.service';
import { Order } from '../../../_class/order';
import { OrderService } from '../../../_service/order.service';
import { OrderDetail } from '../../../_class/order-details';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  providers: [MessageService]
})
export class CheckoutComponent implements OnInit{

  heart = faHeart;
  bag = faShoppingBag;
  phone = faPhone;
  bars = faBars;
  showDepartment = false;
  order = new Order();
  listOrderDetail: any[] = [];
  username !: string;

  orderForm: any = {
    firstname: null,
    lastname: null,
    country: null,
    addrest: null,
    town: null,
    state: null,
    postCode: null,
    email: null,
    phone: null,
    note: null
  }

  constructor(public cartService: CartService, private orderService: OrderService, private storageService: StorageService) {}

  ngOnInit(): void {
      this.username = this.storageService.getUser().username;
      this.cartService.getItems();
      console.log(this.username);
  }

  showDepartmentClick() {
    this.showDepartment = !this.showDepartment;
  }

  placeOrder() {
    this.cartService.items.forEach(res => {
      let orderDetail : OrderDetail = new OrderDetail;
      orderDetail.name = res.name;
      orderDetail.price = res.price;
      orderDetail.quantity = res.quantity;
      orderDetail.subTotal = res.subTotal;
      this.listOrderDetail.push(orderDetail);
    })

    const {firstname, lastname, country, address, town, state, postCode, phone, email, note} = this.orderForm;
    this.orderService.placeOrder(firstname, lastname, country, address, town, state, postCode, phone, email, note, this.listOrderDetail, this.username).subscribe({
      next: res => {
        this.cartService.clearCart();
      }, error: err => {
        console.log(err);
      }
    })
  }

}
