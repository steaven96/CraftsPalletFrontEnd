import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file.serive';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss'],
})
export class AdminProductFormComponent implements OnInit {
  listingcategory: any = [
    { name: 'menu' },
    { name: 'menu' },
    { name: 'menu' },
    { name: 'menu' },
    { name: 'menu' },
    { name: 'menu' },
    { name: 'menu' },
    { name: 'menu' },
    { name: 'menu' },
  ];
  listingSubcategory: any = [
    { name: 'menu' },
    { name: 'menu' },
    { name: 'menu' },
    { name: 'menu' },
    { name: 'menu' },
    { name: 'menu' },
    { name: 'menu' },
    { name: 'menu' },
    { name: 'menu' },
  ];

  progressInfos: any[] = [];
  showTemplatefill = false;

  previews: string[] = [];
  imageInfos?: Observable<any>;

  filteredSubCategories: any = [];
  sizes: any = [];
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  templateData: any = [];
  templateSelected: any;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: any = [];
  colors: any = [];

  productForm: FormGroup;

  //file upload
  selectedImgFiles: any;
  currentFile: any;
  progress = 0;
  fileMessage = '';
  fileInfos: Observable<any>;
  selectedFileNames: string[] = [];
  //file upload end

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private uploadService: UploadFileService
  ) {
    this.initProductForm();
  }

  ngOnInit() {
    this.getProductTemplates();
    this.getCategoryList();
    this.getSubCategoryList();
  }

  getCategoryList() {
    this.productService.getProductCategories().subscribe((res) => {
      //console.log('Product Categories= in cart ' + JSON.stringify(res));
      this.listingcategory = JSON.stringify(res);
      this.listingcategory = JSON.parse(this.listingcategory);
      console.log('prodData in Categories', this.listingcategory);
    });
  }

  getProductTemplates() {
    this.productService.getProductTemplate().subscribe(
      (res) => {
        console.log('res templates', res);
        this.templateData = res;
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
  onCategorySelection(e: any) {
    console.log('e', e);
    console.log('this.listingSubcategory', this.listingSubcategory);
    this.filteredSubCategories = this.listingSubcategory.filter(
      (x: any) => x.categoryId == e.value
    );
    console.log('this.filteredSubCategories', this.filteredSubCategories);
  }
  onFileChanged(event: any): void {
    this.selectedImgFiles = event.target.files[0];
    this.uploadImages();
  }

  uploadImages() {
    console.log('selcted files', this.selectedImgFiles);

    this.uploadService.upload(this.selectedImgFiles).subscribe(
      (event) => {

      },
      (err) => {}
    );
    // this.uploadService.upload(this.currentFile).subscribe(
    //   (event: any) => {
    //     if (event.type === HttpEventType.UploadProgress) {
    //       this.progress = Math.round(100 * event.loaded / event.total);
    //     } else if (event instanceof HttpResponse) {
    //       this.fileMessage = event.body.message;
    //       this.fileInfos = this.uploadService.getFiles();
    //     }
    //   },
    //   err => {
    //     this.progress = 0;
    //     this.fileMessage = 'Could not upload the file!';
    //     this.currentFile = undefined;
    //   });
    // this.selectedImgFiles = undefined;
  }
  getSubCategoryList() {
    this.productService.getProductSubCategories().subscribe((res) => {
      //console.log('Product Sub Categories= in cart ' + JSON.stringify(res));
      this.listingSubcategory = JSON.stringify(res);
      this.listingSubcategory = JSON.parse(this.listingSubcategory);
      console.log('prodData in Sub Categories', this.listingSubcategory);
    });
  }
  initProductForm() {
    this.productForm = this.fb.group({
      productCategory: new FormControl('', [Validators.required]),
      productSubCategory: new FormControl('', [Validators.required]),
      productName: new FormControl('', [Validators.required]),
      productDescription: new FormControl('', [Validators.required]),
      // hasSize: new FormControl(false, []),
      // sizeOptions: new FormControl('', []),
      bulkPrice: new FormControl('', []),
      inventory: new FormControl(0, []),
      bulkQuantity: new FormControl(0, []),
      templateId: new FormControl('', []),
      dateDelivery: new FormControl('', []),
      price: new FormControl(0, []),
      // hasColor: new FormControl(false, []),
      // colorOptions: new FormControl('', []),
      tag1: new FormControl('', []),
      tag2: new FormControl('', []),
      tag3: new FormControl('', []),
      tag4: new FormControl('', []),
      tag5: new FormControl('', []),
      tag6: new FormControl('', []),
    });
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
    //     bulkPrice: "400"
    // bulkQuantity: "100"
    // dateDelivery: Sun Feb 27 2022 00:00:00 GMT+0530 (India Standard Time) {}
    // inventory: "1000"
    // price: "500"
    // productCategory: 57
    // productDescription: "test desc"
    // productName: "test"
    // productSubCategory: 5
    // tag1: "XL"
    // tag2: "Blue"
    // tag3: ""
    // tag4: ""
    // tag5: ""
    // tag6: ""
    // templateId: 1
    console.log('on submit', this.productForm.value);
    const formData = this.productForm.value;
    const obj = {
      name: formData.productName,
      description: formData.productDescription,
      categoryId: formData.productCategory.toString(),
      subCategoryId: formData.productSubCategory.toString(),
      tag1: formData.tag1,
      tag2: formData.tag2,
      tag3: formData.tag3,
      tag4: formData.tag4,
      tag5: formData.tag5,
      tag6: formData.tag6,
      mrp: formData.price,
      bulkQuantity: parseInt(formData.bulkQuantity),
      bulkPrice: parseInt(parseFloat(formData.bulkPrice).toFixed(2)),
      inventory: parseInt(formData.inventory),
      templateId: formData.templateId,
    };
    console.log('obj ***** ', obj);
    this.productService.addProduct(obj).subscribe(
      (res) => {
        console.log('addProduct', res);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
  onTemplateSelection(e: any) {
    console.log(e);

    let index = this.templateData.findIndex((obj: any) => obj.id === e.value);
    if (index != -1) {
      this.templateSelected = this.templateData[index];
      this.showTemplatefill = true;
    }
  }
}
