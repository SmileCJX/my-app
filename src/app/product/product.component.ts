import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];

  private imgUrl: string;

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.imgUrl = 'http://via.placeholder.com/320x150';
  }

}

