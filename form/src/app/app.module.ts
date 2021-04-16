import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { BackendService } from './posts/backend.service';
import { AppErrorHandler } from './posts/app-error-handler';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    NavbarComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'followers', component: GithubFollowersComponent},
      {path: 'profile/:username', component: GithubProfileComponent},
      {path: 'posts', component: PostsComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [
    BackendService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
