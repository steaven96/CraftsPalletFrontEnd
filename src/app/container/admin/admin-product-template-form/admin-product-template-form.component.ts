import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-admin-product-template-form',
	templateUrl: './admin-product-template-form.component.html',
	styleUrls: ['./admin-product-template-form.component.scss']
})
export class AdminProductTemplateFormComponent implements OnInit {
	listingcategory: any = [{ name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' },]
	listingSubcategory: any = [{ name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' },]

	selectedFiles?: FileList;
	selectedFileNames: string[] = [];

	progressInfos: any[] = [];
	message: string[] = [];

	previews: string[] = [];
	config: AngularEditorConfig = {
		editable: true,
		spellcheck: true,
		height: '15rem',
		minHeight: '5rem',
		placeholder: 'Enter text here...',
		translate: 'no',
		defaultParagraphSeparator: 'p',
		defaultFontName: 'Arial',
		toolbarHiddenButtons: [
			['bold']
		],
		customClasses: [
			{
				name: "quote",
				class: "quote",
			},
			{
				name: 'redText',
				class: 'redText'
			},
			{
				name: "titleText",
				class: "titleText",
				tag: "h1",
			},
		]
	};

	templateForm: FormGroup;
	templateData: any = {};


	constructor(private fb: FormBuilder, private productService: ProductService) {
		this.initProductForm();
	}

	ngOnInit() {
		// this.getCategoryList();
		//	this.getSubCategoryList();

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




		});
	}
	initProductForm() {
		this.templateForm = this.fb.group({
			templateName: new FormControl('', [Validators.required]),
			templateDescription: new FormControl('', []),
			templateVariants: this.fb.array([])

		})
		//this.templateForm.controls['sizeOptions'].disable();

	}

	get templateVariants() {
		return this.templateForm.controls["templateVariants"] as FormArray;
	}

	addVariants() {
		const variantForm = this.fb.group({
			variantName: ['', Validators.required],
			variantDisplayName: new FormControl('', [Validators.required])

		});
		this.templateVariants.push(variantForm);
	}

	deleteVariant(index: number) {
		this.templateVariants.removeAt(index);
	}

	productFormSubmit(formData: any) {
		this.templateData = {};
		console.log('on submit', this.templateForm.value);
		console.log('on submit', formData);

		this.templateData['templateName'] = formData['templateName'];
		this.templateData['productInfoDesc1'] = formData['templateDescription'];

		formData.templateVariants.forEach((el: any, index: number) => {
			const tagno = index + 1;
			this.templateData[`tag${tagno}`] = el['variantName'];
			this.templateData[`tag${tagno}Display`] = el['variantDisplayName'];
		});

		console.log('this.templateData', this.templateData);

		this.productService.addProductTemplate(this.templateData).subscribe(res => {
			console.log('res', res);

		}, err => {
			console.log('err', err);

		});



	}
}
