import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.color = "green";
  }

  modify(color: string) {
    this.elementRef.nativeElement.style.color = color;
  }

}
