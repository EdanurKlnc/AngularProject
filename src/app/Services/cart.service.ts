import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

/*
//Sepete ürün ekleme
@Injectable({
    providedIn: 'root'
})
export class CartService {
    placeholder = [];
    cartItems = new BehaviorSubject([]);

    constructor() {
        const ls = this.getCartData();
        if (ls) {
            this.cartItems.next(ls);
        }
    }

    addItem(products:any) {

        const ls = this.getCartData();

        let exits:any;

        if (ls) {
            exits = ls.find((products) => {
                return products.id === products.id;
            });
        }

        if (exits) {
            exits.qty++;
            this.setCartData(ls);
        } else {
            if (ls) {
                const newData = [...ls, products];
                this.setCartData(newData);
                this.cartItems.next(this.getCartData());
            }
            this.placeholder.push(products);
            this.setCartData(this.placeholder);
            this.cartItems.next(this.getCartData());

        }
    }
    setCartData(data:any){
        localStorage.setItem('cart', JSON.stringify(data));
        
    }
    getCartData(){
        return JSON.parse(localStorage.getItem('cart'));
    }
    
}*/


//Sepete ürün ekleme
@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartItems = [];
    numOfItems = new BehaviorSubject([]);

    constructor() {
       
    }

    addItem(products: any) {
        const exits = this.cartItems.find((item) => {
            return item.id === products.id;
        });


        if (exits) {
            exits.qty++;
        } else {

            this.cartItems.push(products);
            this.numOfItems.next(this.cartItems);
            console.log(this.cartItems);

        }


    }
}
