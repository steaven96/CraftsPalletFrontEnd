
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-featuredproduct',
  templateUrl: './featuredproduct.component.html',
  styleUrls: ['./featuredproduct.component.scss']
})
export class FeaturedProductComponent implements OnInit{

  productsData: any = [];
 
  constructor(private productService: ProductService) {
    
  }
  ngOnInit() {
    this.getProductsList();
  }

  getProductsList() {
    this.productService.getProductList(2).subscribe(res => {
      //console.log('Product Categories=' + JSON.stringify(res));
      this.productsData = JSON.stringify(res);
      this.productsData = JSON.parse(this.productsData);
     //  console.log('prodData', this.productsData);
    });
  }
}
