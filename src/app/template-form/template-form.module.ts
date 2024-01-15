import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";
import { TemplateFormComponent } from "./template-form.component";
import { TemplateFormRoutingModule } from "./template-form-routing.module";
import { PostsService } from "../services/posts.service";
import { HighlightDirective } from "../directives/highlight.directive";
import { SortPostPipe } from "../pipe/sort-post.pipe";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { authInterceptor } from "../interceptor/auth.interceptor";

@NgModule({
    imports: [SharedModule, TemplateFormRoutingModule],
    declarations: [TemplateFormComponent, HighlightDirective, SortPostPipe],
    providers: [PostsService,provideHttpClient(
        withInterceptors([authInterceptor])
    )]
})
export class TemplateFormModule { }