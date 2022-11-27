import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ProductComponent } from '../product/product.component';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  itemInCart: number;

  constructor(private cartService: CartService) { }


  ngOnInit(): void {
      this.cartService.numOfItems.subscribe(d => {
      this.itemInCart = d.length;
   });
  }


}
