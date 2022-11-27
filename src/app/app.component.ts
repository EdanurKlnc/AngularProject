import { Component, OnInit } from '@angular/core';
import { CartService } from './Services/cart.service';
import { ProductService } from './Services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]

})
export class AppComponent {
  title = 'AngularProject';


  constructor(private productService: ProductService, private cartService: CartService) {  }
}

