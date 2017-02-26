import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class TestService{
  constructor(private http: Http){}
  private baseUrl: string = 'http://127.0.0.1:8080';
  getString(){
    let test$ = this.http.get(`${this.baseUrl}/greeting`, {headers: this.getHeaders()});
  test$.subscribe(result => {
    console.log( result );
  });
  }
  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
    return headers;
  }
}
