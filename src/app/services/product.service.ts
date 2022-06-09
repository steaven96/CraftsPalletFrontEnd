import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';
import { ProductSubCategory } from '../common/product-subcategory';
import { baseurl } from '../config/my-app-config';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private baseUrl = `${baseurl}api/products`;

    private categoryUrl = `${baseurl}api/product-category`;

    private SubcategoryUrl = `${baseurl}api/product-subcategory`;


    constructor(private httpClient: HttpClient) {
    }

    getProduct(theProductId: number): Observable<Product> {

        // need to build URL based on product id
        const productUrl = `${this.baseUrl}/${theProductId}`;

        return this.httpClient.get<Product>(productUrl);
    }

    getProductListPaginate(thePage: number,
        thePageSize: number,
        theCategoryId: number): Observable<GetResponseProducts> {

        // need to build URL based on category id, page and size
        const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
            + `&page=${thePage}&size=${thePageSize}`;

        return this.httpClient.get<GetResponseProducts>(searchUrl);
    }


    getProductList(theCategoryId: number): Observable<Product[]> {

        // need to build URL based on category id
        const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

        return this.getProducts(searchUrl);
    }

    searchProducts(theKeyword: string): Observable<Product[]> {

        // need to build URL based on the keyword
        const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

        return this.getProducts(searchUrl);
    }

    searchProductsPaginate(thePage: number,
        thePageSize: number,
        theKeyword: string): Observable<GetResponseProducts> {

        // need to build URL based on keyword, page and size
        const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
            + `&page=${thePage}&size=${thePageSize}`;

        return this.httpClient.get<GetResponseProducts>(searchUrl);
    }


    private getProducts(searchUrl: string): Observable<Product[]> {
        return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(map(response => response._embedded.products));
    }

    getAllProduct(): Observable<Product[]> {

        return this.httpClient.get<GetResponseProducts>(this.baseUrl).pipe(
            map(response => response._embedded.products)
        );
    }

    getProductCategories(): Observable<ProductCategory[]> {

        return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
            map(response => response._embedded.productCategory)
        );
    }

    getProductSubCategories(): Observable<ProductSubCategory[]> {


        return this.httpClient.get<GetResponseProductSubCategory>(this.SubcategoryUrl).pipe(
            map(response => response._embedded.productSubCategory)
        );
    }

    addProductTemplate(data: any): Observable<any> {
        return this.httpClient.post<any>(`${this.baseUrl}/addTemplate`, data);
    }

    addProduct(data: any): Observable<any> {
        return this.httpClient.post<any>(`${this.baseUrl}/addProduct`, data);
    }

    getProductTemplate(): Observable<any> {
        return this.httpClient.get<any>(`${this.baseUrl}/getProductTemplate`);
    }


}

interface GetResponseProducts {
    _embedded: {
        products: Product[];
    },
    page: {
        size: number,
        totalElements: number,
        totalPages: number,
        number: number
    }
}

interface GetResponseProductCategory {
    _embedded: {
        productCategory: ProductCategory[];
    }
}

interface GetResponseProductSubCategory {
    _embedded: {
        productSubCategory: ProductSubCategory[];
    }
}
