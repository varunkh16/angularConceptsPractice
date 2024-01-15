import { NgModule } from "@angular/core";
import { ReactiveFormComponent } from "./reactive-form.component";
import { SharedModule } from "../shared.module";
import { ReactiveFormRoutingModule } from "./reactive-form-routing.module";

@NgModule({
    imports: [SharedModule, ReactiveFormRoutingModule],
    declarations: [ReactiveFormComponent]
})
export class ReactiveFormModule { }