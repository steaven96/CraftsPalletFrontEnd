import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';
import { ProductSubCategory } from '../common/product-subcategory';
import { baseurl } from '../config/my-app-config';

@Injectable({
  providedIn: 'root',
})
export class AdminLoginService {
  private baseUrl = `${baseurl}api/adminlogin`;

  // private categoryUrl = `${baseurl}api/product-category`;

  // private SubcategoryUrl = `${baseurl}api/product-subcategory`;

  constructor(private httpClient: HttpClient) {}

  getAdminLogin(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/getAdminLogin`, data);
  }
}
