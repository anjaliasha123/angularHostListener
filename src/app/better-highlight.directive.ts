import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[better-highlighter]"
})
export class BetterHighlightDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit() {}
  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "green"
    );
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "transparent"
    );
  }
}
