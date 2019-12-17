import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

const localUrl = 'https://jsonplaceholder.typicode.com/posts';//'assets/data/smartphone.json.txt';
@Injectable()
export class PublicApiService {

  constructor(private http: HttpClient) { }

  getSmartphone() {
    return this.http.get(localUrl);
  }
}
