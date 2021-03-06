import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  product: Product = new Product();
  cart: Cart = new Cart();

  name: string="";
  constructor(private productService: ProductService, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  
  logout() {
    this.router.navigate(['/logoutcomponent'])
}

   getProducts() {
    this.productService.getProductList().subscribe(data => { this.products = data, console.log(data) });
  }

  alert() {
    alert("one product added to cart");
  }

  getByName() {
    this.products=[];
    this.productService.getProductByName(this.name).subscribe(data => {
      console.log(data)
      this.products[0] = data;
    })
  }

  addToCart(i: any) {
    console.log(this.products[i])

    this.cart.cart_item = this.products[i].name;

    this.cart.price = this.products[i].price;

    this.cart.quantity = "1";

    console.log(this.cart)

    this.cartService.addToCart(this.cart).subscribe(data => {
      console.log(data);
      alert("one product added to cart");
})


  }


}
