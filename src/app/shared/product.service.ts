import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products : Product[]  = [
    new Product(1,"第一个商品",1.99,3.5,"这是我的第一个商品，在我在学习慕课网Angular入门实战创建的",["电子产品","电子设备"]),
    new Product(2,"第二个商品",2.99,2.5,"这是我的第二个商品，在我在学习慕课网Angular入门实战创建的",["图书"]),
    new Product(3,"第三个商品",3.99,4.5,"这是我的第三个商品，在我在学习慕课网Angular入门实战创建的",["美妆"]),
    new Product(4,"第四个商品",4.99,1.5,"这是我的第四个商品，在我在学习慕课网Angular入门实战创建的",["电器"]),
    new Product(5,"第五个商品",5.99,3.5,"这是我的第五个商品，在我在学习慕课网Angular入门实战创建的",["家具"]),
    new Product(6,"第六个商品",6.99,2.5,"这是我的第六个商品，在我在学习慕课网Angular入门实战创建的",["学习产品","电子设备"])
  ];

  private comments : Comment[] = [
    new Comment(1,1,"2017-12-16 23:00:00","张三",3,"东西不错"),
    new Comment(2,1,"2017-09-16 11:00:00","李四",4,"值得表扬"),
    new Comment(3,1,"2017-07-16 12:00:00","王五",2,"不太满意"),
    new Comment(4,2,"2017-11-16 08:00:00","赵六",5,"东西很好"),
  ]

  constructor() { }

  getProducts() : Product[] {
    return this.products;
  }

  getProduct(id : number) : Product[] {
    return this.products.filter((product: Product) => product.id == id);
  }

  getCommentsForProductId(id : number) : Comment[] {
    return this.comments.filter((comment : Comment) => comment.productId == id);
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

export class Comment {

  constructor(
    public id : number,
    public productId : number,
    public timestamp : string,
    public user : string,
    public rating : number,
    public content : string
  ) {

  }
}
