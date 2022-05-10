import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UniversalStorage implements Storage {
  [index: number]: string;
  [key: string]: any;
  length: number;
  cookies: any;

  constructor(private cookieService: CookieService) { }

  public clear(): void {
    this.cookieService.deleteAll();
  }

  public getAll(): Object {
    return this.cookieService.getAll();
  }

  public getItem(key: string): string {
    return this.cookieService.get(key);
  }

  public key(index: any): string {
    return '';//this.cookieService.getAll().propertyIsEnumerable[index];
  }

  public removeItem(key: string): void {
    this.cookieService.delete(key);
  }

  public setItem(key: string, data: any): void {
    //this.cookieService.delete(key, data);
    this.cookieService.set(key, data);
  }
}
