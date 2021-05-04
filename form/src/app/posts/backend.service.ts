import { Injectable } from '@angular/core';  
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Input } from '@material-ui/core';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({  
   providedIn: 'root'  
})  
export class BackendService { 

private url = 'https://jsonplaceholder.typicode.com';


constructor(private httpClient: HttpClient) { } 

public get()
   {  
    // let id: number;
    let endPoints = "/posts/";
    return this.httpClient.get(this.url + endPoints);  
   }  

public getById()
{  
let id: number = 1;
let endPoints = "/posts/" + id;
return this.httpClient.get(this.url + endPoints);  
}  

public post(postData: Object) {
    let endPoints = "/posts";
    return this.httpClient.post(this.url + endPoints, postData);  
} 

public patch(postData: Object) {
    let id: number = 1;
    let endPoints = "/posts/" + id;
    return this.httpClient.patch(this.url + endPoints, postData);  
} 
public delete(postData: Object) {
    let id: number = 1;
    let endPoints = "/posts/" + id;
    return this.httpClient.delete(this.url + endPoints, postData).pipe(retry(1), catchError(error => {
        return throwError(error.message)
    }));  
}
}  