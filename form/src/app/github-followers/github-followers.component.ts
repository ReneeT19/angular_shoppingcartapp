import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.service.getAll()
    // .subscribe(followers => this.followers = followers);
  }
  followers: any[];
}
