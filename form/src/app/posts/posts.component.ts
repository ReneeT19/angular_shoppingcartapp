import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service'
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  id=[];
  data= []; 
  constructor(private backendService: BackendService) { }

// posts: any[];

//   constructor(httpClient: HttpClient) { 
//     httpClient.get('http://jsonplaceholder.typicode.com/posts')
//     .subscribe(response => {
//       posts = response;
//     });
//   }

  ngOnInit() {

    this.backendService.get().subscribe((res:any[]) =>{  
    console.log(res);  
    this.data = res;
    })  
  }

  getById() {
    this.backendService.getById().subscribe((res:any[]) => {
      console.log(res);
      this.data = res;
    })
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value="";

    this.backendService.post(post).subscribe(response => {
      // post['id']=response.id;
      this.id=post['id'];
      this.data.splice(0,0,post);
      console.log(response);
    },
    (error:Response) => {
      if(error.status===400) {}
        // this.form.setErrors(error.json())
      else {
        alert('An unexpected error occurred.');
        console.log(error);
      }
    });
  }

  updatePost(post) {
    this.backendService.patch(post).subscribe((response:any) => {
      console.log(response);
    })
  }

  deletePost(post) {
    this.backendService.delete(345).subscribe(response => {
      let index = this.data.indexOf(post);
      this.data.splice(index,1);
      console.log(response);
    },
    (error: Response) => {
      if(error.status === 404) 
        alert('This post has already been deleted.');    
      else {
        alert('An expected error occurred.');
        console.log(error);
      }}
    );
  }
}
