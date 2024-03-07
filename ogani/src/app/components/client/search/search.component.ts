import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHeart, faRetweet, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { CartService } from '../../../_service/cart.service';
import { WishlistService } from '../../../_service/wishlist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [MessageService]
})
export class SearchComponent implements OnInit{

  heart = faHeart;
  bag = faShoppingBag;
  retweet = faRetweet;

  keyword: any;
  listProduct: any;
  listProductNewest: any;
  listCategory: any;
  rangeValues = [0, 100];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private messageService: MessageService,
    private wishlistService: WishlistService) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     }

     ngOnInit(): void {
         this.keyword = this.route.snapshot.params['keyword'];
         this.getListProduct();
         this.getListCategoryEnabled();
         this.getNewestProduct();
     }

     getListProduct() {

     }

     getListCategoryEnabled() {

     }

     getNewestProduct() {

     }

     addToCart(item: any) {
      this.cartService.getItems();
      this.cartService.addToCart(item, 1);
     }

     addToWishList(item: any) {
      if(!this.wishlistService.productInWishList(item)) {
        this.wishlistService.addToWishList(item);
      }
     }

}
