import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversalStorage } from '../../../../src/app/services/universal.storage';

@Component({
  selector: 'app-productDetails',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productID: any;
  quantityvalue: number = 1;
  constructor(
    private metaService: Meta,
    private titleService: Title,
    public router: Router,
    private universalStorage: UniversalStorage,
    private activatedRoute: ActivatedRoute,
  ) {
  }


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (!!params.id) {
        this.productID = params.id;
        console.log(this.productID)
        this.getproductDetail();
      }
    });
  }


  getproductDetail() {

  }

  addtoCart() {

    const dataObj1 = {
      QTTY: this.quantityvalue,
      UDID: this.productID
    };
    
   this.universalStorage.setItem('cart', JSON.stringify(dataObj1));

  }

  increaseQuantity(productquantity: number) {

    this.quantityvalue = productquantity + 1;

  }

  decreaseQuantity(productquantity: number) {
    if (productquantity > 0) {
      this.quantityvalue = productquantity - 1;

    }

  }

}



