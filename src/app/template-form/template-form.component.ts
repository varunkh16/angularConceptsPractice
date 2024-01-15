import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { HighlightDirective } from '../directives/highlight.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent implements OnInit {

  @ViewChild("f") signupForm!: NgForm;
  @ViewChild(HighlightDirective) color?: HighlightDirective;
  private postsService?: PostsService;
  public matchingPosts?: [];

  constructor(private route: ActivatedRoute) {
    this.postsService = inject(PostsService);
  }

  ngOnInit(): void {
    this.initPosts();
  }

  initPosts() {
    this.matchingPosts = this.route.snapshot.data['matchingPosts'];
    console.log(this.matchingPosts);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.postsService?.getPosts(form.value.postid)
      .subscribe({
        next: (response) => this.matchingPosts = response as any,
        error: (error) => console.error(error),
        complete: () => console.info(this.matchingPosts)
      });
  }

  changeColor(form: NgForm) {
    console.log(form.value);
    this.color?.modify(form.value.color);
  }

  // populateData() {
  //   this.signupForm.setValue({
  //     "username": "test",
  //     "email": "test@test.com"
  //   });
  // }
}
