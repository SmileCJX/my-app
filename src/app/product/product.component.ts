import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1,"第一个商品",1.99,3.5,"这是我的第一个商品，在我在学习慕课网Angular入门实战创建的",["电子产品","电子设备"]),
      new Product(2,"第二个商品",2.99,2.5,"这是我的第二个商品，在我在学习慕课网Angular入门实战创建的",["图书"]),
      new Product(3,"第三个商品",3.99,4.5,"这是我的第三个商品，在我在学习慕课网Angular入门实战创建的",["美妆"]),
      new Product(4,"第四个商品",4.99,1.5,"这是我的第四个商品，在我在学习慕课网Angular入门实战创建的",["电器"]),
      new Product(5,"第五个商品",5.99,3.5,"这是我的第五个商品，在我在学习慕课网Angular入门实战创建的",["家具"]),
      new Product(6,"第六个商品",6.99,2.5,"这是我的第六个商品，在我在学习慕课网Angular入门实战创建的",["学习产品","电子设备"])
    ]
  }

}

export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: Array<string>
  ) {

  }
}
