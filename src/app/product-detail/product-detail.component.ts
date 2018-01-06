import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, ProductService, Comment} from "../shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products : Product[];

  comments : Comment[];

  newRating: number = 5;

  newComment: string = '';

  isCommentHide: boolean = true;

  constructor(private routeInfo : ActivatedRoute,
                private productService : ProductService) { }

  ngOnInit() {
    let productId : number = this.routeInfo.snapshot.params['productId'];
    this.products = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

  addComment() {
    let comment = new Comment(0,this.products[0].id,new Date().toISOString(),"someone",this.newRating,this.newComment);
    this.comments.unshift(comment);

    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.products[0].rating = sum / this.comments.length;

    this.newComment  = null;
    this.newRating = 5;
    this.isCommentHide = true;
  }

}
