import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { postsResolver } from './resolver/posts.resolver';

export const routes: Routes = [
  {
    path: 'reactiveForms',
    loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)
  },
  {
    path: 'templateForms',
    loadChildren: () => import('./template-form/template-form.module').then(m => m.TemplateFormModule),
    canLoad: [authGuard],
    resolve: {matchingPosts: postsResolver}
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }
];
