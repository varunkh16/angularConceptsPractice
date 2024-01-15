import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, HttpClientModule],
    exports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class SharedModule { }