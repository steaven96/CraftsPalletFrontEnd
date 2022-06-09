import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  private baseUrl = 'http://localhost:8080/api/products';
  constructor(private http: HttpClient) {}
  upload(selectedImgs: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('imageFile', selectedImgs, selectedImgs.name);
    const req = new HttpRequest('POST', `${this.baseUrl}/uploadProductImages`, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }

  // getImage() {
  //   //Make a call to Sprinf Boot to get the Image Bytes.
  //   this.httpClient
  //     .get(`${baseurl}image/get/` + this.imageName)
  //     .subscribe((res) => {
  //       this.retrieveResonse = res;
  //       this.base64Data = this.retrieveResonse.picByte;
  //       this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  //     });
  // }
}
