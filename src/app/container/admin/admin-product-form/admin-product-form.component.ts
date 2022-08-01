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
import { ActivatedRoute, Router } from '@angular/router';

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
  showVariants = false;

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
  selectedTemplate: any;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: any = [];
  colors: any = [];

  productForm: FormGroup;

  productData: any = {};

  //file upload
  selectedImgFiles: any;
  currentFile: any;
  progress = 0;
  fileMessage = '';
  fileInfos: Observable<any>;
  selectedFileNames: string[] = [];
  //file upload end

  imageData: any;
  base64Data: any;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private uploadService: UploadFileService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.initProductForm();
  }

  ngOnInit() {
    this.getProductTemplates();
    this.getCategoryList();
    // this.getSubCategoryList();
  }

  getProductById(productId: any) {
    console.log('called', productId);
    const obj = {
      id: productId,
    };
    this.productService.fetchProductById(obj).subscribe(
      (res) => {
        console.log('getProductById', res);
        this.productData = res;
        if (!!this.productData.categoryId) {
          const categoryObj = this.listingcategory.filter(
            (x: any) => x.id == this.productData.categoryId
          );
          this.productForm.get('productCategory')?.setValue(categoryObj[0]);
          this.filterSubCategories(this.productData.categoryId);
        }
        if (!!this.productData.subCategoryId) {
          const subCatObj = this.filteredSubCategories.filter(
            (x: any) => x.id == this.productData.subCategoryId
          );
          this.productForm.get('productSubCategory')?.setValue(subCatObj[0]);
          this.filterSubCategories(this.productData.categoryId);
        }
        if (!!this.productData.primaryImg) {
          this.getImageById(this.productData.primaryImg);
        }
        if (!!this.productData.templateId) {
          const templateObj = this.templateData.filter(
            (x: any) => x.id == this.productData.templateId
          );
          this.productForm.get('templateId')?.setValue(templateObj[0]);
          this.onTemplateSelection({ value: this.productData.templateId });
        }
      },
      (err) => {
        alert('Error Fetching Product');
      }
    );
  }

  getImageById(imgId: any) {
    const obj = {
      id: imgId,
    };
    this.productService.fetchImageById(obj).subscribe(
      (res) => {
        console.log('logs** getImageById', res);
        // this.productData = res;
        // this.base64Data =
        this.imageData = 'data:image/jpeg;base64,' + res.picBytes;
        console.log('this.imageData', this.imageData);
      },
      (err) => {
        alert('Error Fetching Product');
      }
    );
  }

  getCategoryList() {
    this.productService.getProductCategories().subscribe((res) => {
      //console.log('Product Categories= in cart ' + JSON.stringify(res));
      this.listingcategory = JSON.stringify(res);
      this.listingcategory = JSON.parse(this.listingcategory);
      console.log('prodData in Categories', this.listingcategory);
      this.getSubCategoryList();
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
    this.filterSubCategories(e.value);
  }
  // onCategorySelection(e: any) {
  //   console.log('e', e);
  //   console.log('this.listingSubcategory', this.listingSubcategory);
  //   this.filteredSubCategories = this.listingSubcategory.filter(
  //     (x: any) => x.categoryId == e.value
  //   );
  //   console.log('this.filteredSubCategories', this.filteredSubCategories);
  // }

  filterSubCategories(categoryId: any) {
    console.log('logs** categoryId', categoryId);
    console.log('logs** this.listingSubcategory', this.listingSubcategory);
    this.filteredSubCategories = this.listingSubcategory.filter(
      (x: any) => x.categoryId == categoryId
    );
    console.log('this.filteredSubCategories', this.filteredSubCategories);
  }
  onFileChanged(event: any): void {
    this.selectedImgFiles = event.target.files[0];
    // this.uploadImages();
  }

  async uploadImages() {
    console.log('selcted files', this.selectedImgFiles);
    let res: any = '';
    this.uploadService.upload(this.selectedImgFiles).subscribe(
      (response) => {
        res = response;
      },
      (err) => {
        res = err;
      }
    );

    return res;
  }
  getSubCategoryList() {
    this.productService.getProductSubCategories().subscribe((res) => {
      //console.log('Product Sub Categories= in cart ' + JSON.stringify(res));
      this.listingSubcategory = JSON.stringify(res);
      this.listingSubcategory = JSON.parse(this.listingSubcategory);
      console.log('prodData in Sub Categories', this.listingSubcategory);
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      console.log('id', id);
      if (!!id) {
        this.getProductById(id);
      }
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

  onProductSave() {
    this.uploadService.upload(this.selectedImgFiles).subscribe(
      (response: any) => {
        console.log('response', response);
        if (!!response['body']) {
          this.productFormSubmit(response['body']['imgId']);
        }
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

  productFormSubmit(imgId: any) {
    console.log('on submit', this.productForm.value);
    const formData = this.productForm.value;
    const obj = {
      name: formData.productName,
      description: formData.productDescription,
      categoryId: !!formData.productCategory
        ? formData.productCategory['id']
        : null,
      subCategoryId: !!formData.productSubCategory
        ? formData.productSubCategory['id']
        : null,
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
      templateId: !!formData.templateId ? formData.templateId['id']: null,
      primaryImg: imgId,
    };
    console.log('obj ***** ', obj);
    this.productService.addProduct(obj).subscribe(
      (res) => {
        console.log('addProduct', res);
        alert('Product saved');
        this.router.navigate(['admin/products']);
      },
      (err) => {
        alert('Error Saving Product');
        console.log('err', err);
      }
    );
  }
  onTemplateSelection(e: any) {
    let index = this.templateData.findIndex((obj: any) => obj.id == e.value);
    if (index != -1) {
      this.selectedTemplate = this.templateData[index];
      this.showVariants = true;
    }
  }
}
