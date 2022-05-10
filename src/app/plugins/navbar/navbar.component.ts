
import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
declare var $: any;
@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

	listingcategory: any = [{ name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' },]
	listingSubcategory: any;
	productsList: any = {};
	constructor(private productService: ProductService) {

	}
	ngOnInit() {
		this.getCategoryList();
		this.getSubCategoryList();
	}

	getCategoryList() {
		this.productService.getProductCategories().subscribe(res => {
			//console.log('Product Categories= in cart ' + JSON.stringify(res));
			this.listingcategory = JSON.stringify(res);
			this.listingcategory = JSON.parse(this.listingcategory);
			console.log('prodData in Categories', this.listingcategory);

		});

	}

	getSubCategoryList() {
		this.productService.getProductSubCategories().subscribe(res => {
			//console.log('Product Sub Categories= in cart ' + JSON.stringify(res));
			this.listingSubcategory = JSON.stringify(res);
			this.listingSubcategory = JSON.parse(this.listingSubcategory);
			console.log('prodData in Sub Categories', this.listingSubcategory);

			this.createNestedList();


		});
	}

	// GroupBYProductType(objectArray, property) {
	//     return objectArray.reduce((acc, obj) => {
	//         const key = obj[property];
	//         if (!acc[key]) {
	//             acc[key] = [];
	//         }
	//         // Add object to list for given key's value
	//         acc[key].push(obj);
	//         return acc;
	//     }, {});
	// }
	createNestedList() {



		console.log('this.listingcategory', this.listingcategory);
		console.log('this.listingSubcategory', this.listingSubcategory);

		let obj: any;
		this.listingcategory.forEach((el: any) => {
			this.productsList[el['categoryName']] = this.listingSubcategory.filter((x: any) =>  x.categoryId == el['id'] );
		});

		// for (var i = 0; i < this.listingcategory.length; i++) {
		// 	this.productsList[this.listingcategory[i].categoryName] = []
		// 	for (let p = 0; p < this.listingSubcategory.length; p++) {
		// 		if (this.listingSubcategory[p].categoryId == this.listingcategory[i].id) {
		// 			this.productsList[this.listingcategory[i].categoryName].push(this.listingSubcategory[p])
		// 		}
		// 		//productsList[this.listingcategory[i]][this.listingSubcategory[p]] = {};
		// 	}
		// }
		console.log('productsList', this.productsList);





	}


}
