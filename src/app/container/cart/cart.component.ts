import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { UniversalStorage } from '../../../../src/app/services/universal.storage';


@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

	cartData: any = [{
		name: 'OupIDatat non',
		unitsInStock: 5,
		imageUrl: 'assets/img/shop_06.jpg',
		unitPrice: 250,
		id: '1'
	},
	{
		name: 'OupIDatat non2',
		unitsInStock: 6,
		imageUrl: 'assets/img/shop_06.jpg',
		unitPrice: 250,
		id: '2'
	}];
	cartTotal: any = 250;

	constructor(private productService: ProductService) {

		//this.cartData[0].this.universalStorage.getItem('cart');
	}
	ngOnInit() {
	
		//this.getProductsList();
	}
	DeleteCart(item: any) {

	}
	getProductsList() {
		this.productService.getProductList(2).subscribe(res => {
			//console.log('Product Categories= in cart ' + JSON.stringify(res));
			//	this.cartData = JSON.stringify(res);
			//	this.cartData = JSON.parse(this.cartData);
			//console.log('prodData in cart', this.cartData);
			this.cartTotal = 0;
			this.cartData.forEach((el: any) => {
				this.cartTotal += parseFloat(el['unitPrice']);
			});
			this.cartTotal = parseFloat(this.cartTotal).toFixed(2);
			console.log('cartTotal', this.cartData);
		});
	}
}
