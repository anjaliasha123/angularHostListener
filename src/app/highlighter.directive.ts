import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[app-highlighter]"
})
export class HighlighterDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "blue";
  }
}
