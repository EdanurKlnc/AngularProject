import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  products;
  productsId;
 
  
   constructor(private activatedRoute :ActivatedRoute , private productService: ProductService,private cartService: CartService){ }
 
  // constructor(private productService: ProductService) { }
   //products: { id: number; name: string; type: string; price: number; color: string; available: string; image: string; } | undefined;
 
   ngOnInit(): void {
    this.productsId= this.activatedRoute.snapshot.paramMap.get('id');
    this.products = this.productService.products.find(x => x.id == this.productsId);
   
  }


}
