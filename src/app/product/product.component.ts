import { Component, OnInit, Output } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  constructor(private productService : ProductService, private cartService:CartService){

  }

  products:
   { 
     id: number,
    name: string,
    type: string,
    price: number,
    color: string,
    available: string,
    image: string,
    details: string} []=[];

 
  ngOnInit(): void {
    this.products = this.productService.products;
  }
  getTotalAll(): number{
    return this.products.length;
  }
  getTotalAlt(){
    return this.products.filter(products => products.type === 'Alt').length;
  }
  getTotalUst(){
    return this.products.filter(products => products.type === 'Üst').length;
  }
  
  productCountRadioButton: string ='All';
  searchText: string ='';
  
  onFilterRadioButtonChanged(data:string){
    this.productCountRadioButton= data;
    console.log(this.productCountRadioButton);
  
  }
  
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }
  addToCart(products){

    this.cartService.addItem(products);
  }
}





