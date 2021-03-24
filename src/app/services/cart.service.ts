import { Injectable } from '@angular/core';
import { Car } from 'rentcar-frontend/src/app/models/car';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car:Car){
    let item = CartItems.find(c=>c.car.Id==car.Id);
    if(item){
      item.day+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.car;
      cartItem.day =1;
      CartItems.push(cartItem)
    }
  }

  removeFromCart(car:Car){
    let item:CartItem = CartItems.find(c=>c.car.Id===car.Id);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }
}
