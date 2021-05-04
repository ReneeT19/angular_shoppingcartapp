import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {


 
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap['id']

    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      // params.get('username');
      console.log(id);
    })
  }

}
