import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { CartService}   from '../Services/cart.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
 
 products;
 productsId;
 itemInCart: number;

  constructor(private activatedRoute :ActivatedRoute , private productService: ProductService,private cartService: CartService){ }

 // constructor(private productService: ProductService) { }
  //products: { id: number; name: string; type: string; price: number; color: string; available: string; image: string; } | undefined;

  ngOnInit(): void {
   this.productsId= this.activatedRoute.snapshot.paramMap.get('id');
   //this.productsId= this.activatedRoute.snapshot.params['id'];
   this.products = this.productService.products.find(x => x.id == this.productsId);
  }
  addToCart(products){
    this.cartService.addItem(products);
  }

}
