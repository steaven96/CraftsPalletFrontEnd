import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-categories-form',
  templateUrl: './admin-categories-form.component.html',
  styleUrls: ['./admin-categories-form.component.scss']
})
export class AdminCategoriesFormComponent implements OnInit {
  listingcategory: any = [{ name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' },]
	listingSubcategory: any = [{ name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' }, { name: 'menu' },]

  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;
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

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: any = [];
  colors: any = [];

  productForm: FormGroup;


  constructor(private fb: FormBuilder,private productService: ProductService) {
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

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
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
    this.productForm = this.fb.group({      
      categoryName: new FormControl('', [Validators.required]),
      categoryDescription: new FormControl('', []),
      categoryLink: new FormControl('', []),
     
    })
    //this.productForm.controls['sizeOptions'].disable();
    
  }
  // onSizeSelection() {
  //   console.log(this.productForm.value);
  //   const sizeval = this.productForm.value['hasSize'];
  //   if (sizeval) {
  //     this.productForm.controls['sizeOptions'].enable();
  //   } else {
  //     this.productForm.controls['sizeOptions'].setValue('');
  //     this.productForm.controls['sizeOptions'].disable();
  //   }
    
  // }
  // onColorSelection() {
  //   console.log(this.productForm.value);
  //   const sizeval = this.productForm.value['hasColor'];
  //   if (sizeval) {
  //     this.productForm.controls['colorOptions'].enable();
  //   } else {
  //     this.productForm.controls['colorOptions'].setValue('');
  //     this.productForm.controls['colorOptions'].disable();
  //   }
    
  // }

  // addSize(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     const obj = { name: value };
  //     this.fruits.push(obj);
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();
  // }
  
  // addColor(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     const obj = { name: value };
  //     this.colors.push(obj);
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();
  // }

  // removeSize(fruit: any): void {
  //   const index = this.fruits.indexOf(fruit);

  //   if (index >= 0) {
  //     this.fruits.splice(index, 1);
  //   }
  // }
  
  // removeColor(fruit: any): void {
  //   const index = this.colors.indexOf(fruit);

  //   if (index >= 0) {
  //     this.colors.splice(index, 1);
  //   }
  // }


  productFormSubmit() {
    console.log('on submit', this.productForm.value);
  }
}
