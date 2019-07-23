import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AboutUsEditService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  about(about) {
  
   const obj = {
     about: about
   };
  //  console.log("aaaaaaaaaaaaaaa",obj);
   this.http.post(`${this.uri}/about-edit`, obj)
       .subscribe(res => console.log('Done'));
 }
}
