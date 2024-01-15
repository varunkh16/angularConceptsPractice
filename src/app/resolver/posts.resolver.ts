import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PostsService } from '../services/posts.service';

export const postsResolver: ResolveFn<any> = (route, state) => {
  const postService = inject(PostsService);
  return postService.getPosts(11);
};
