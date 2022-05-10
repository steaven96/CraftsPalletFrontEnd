
import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent {

  ProductListing: any = [
    {
      ID: '1',
      PRODUCT_NAME: 'OupIDatat non',
      LIKE_LIST: 'NO',
      WISH_LIST: 'NO',
      IS_AVAILABLE: 'YES',
      STOCK: '5',
      PRIMARY_IMG: 'assets/img/shop_01.jpg',
      SELLING_PRICE: '2500',
      BE_MRP: '250',
      TAGS: 'M/L/X/XL'

    },
    {
      ID: '2',
      PRODUCT_NAME: 'OupIDatat non',
      LIKE_LIST: 'NO',
      WISH_LIST: 'NO',
      IS_AVAILABLE: 'YES',
      STOCK: '5',
      PRIMARY_IMG: 'assets/img/shop_02.jpg',
      SELLING_PRICE: '2500',
      BE_MRP: '250',
      TAGS: 'M/L/X/XL'

    },
    {
      ID: '3',
      PRODUCT_NAME: 'OupIDatat non',
      LIKE_LIST: 'NO',
      WISH_LIST: 'NO',
      IS_AVAILABLE: 'YES',
      STOCK: '5',
      PRIMARY_IMG: 'assets/img/shop_03.jpg',
      SELLING_PRICE: '2500',
      BE_MRP: '250',
      TAGS: 'M/L/X/XL'

    },
    {
      ID: '4',
      PRODUCT_NAME: 'OupIDatat non',
      LIKE_LIST: 'NO',
      WISH_LIST: 'NO',
      IS_AVAILABLE: 'YES',
      STOCK: '5',
      PRIMARY_IMG: 'assets/img/shop_04.jpg',
      SELLING_PRICE: '2500',
      BE_MRP: '250',
      TAGS: 'M/L/X/XL'

    },
    {
      ID: '5',
      PRODUCT_NAME: 'OupIDatat non',
      LIKE_LIST: 'NO',
      WISH_LIST: 'NO',
      IS_AVAILABLE: 'YES',
      STOCK: '5',
      PRIMARY_IMG: 'assets/img/shop_05.jpg',
      SELLING_PRICE: '2500',
      BE_MRP: '250',
      TAGS: 'M/L/X/XL'

    },
    {
      ID: '6',
      PRODUCT_NAME: 'OupIDatat non',
      LIKE_LIST: 'NO',
      WISH_LIST: 'NO',
      IS_AVAILABLE: 'YES',
      STOCK: '5',
      PRIMARY_IMG: 'assets/img/shop_06.jpg',
      SELLING_PRICE: '2500',
      BE_MRP: '250',
      TAGS: 'M/L/X/XL'

    },
  ]


  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private metaService: Meta,

  ) {
    // super(componentManagerService, router);
  }

}
