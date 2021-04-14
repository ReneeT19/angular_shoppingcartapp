import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BackendService } from './backend.service'
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  data= []; constructor(private backendService: BackendService) { }

// posts: any[];

//   constructor(httpClient: HttpClient) { 
//     httpClient.get('http://jsonplaceholder.typicode.com/posts')
//     .subscribe(response => {
//       posts = response;
//     });
//   }

ngOnInit() { this.backendService.get().subscribe((ret: any[])=>{  
  console.log(ret);  
  this.data = ret;  
  })  
}
}
