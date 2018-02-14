import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({selector: '[appStyles]'})
export class StylesDirective implements OnInit {
  @Input() public styles: any;
  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.addStyles(this.styles);
  }

  private addStyles(styles: {string: any}) {
    if (!styles) {
      return;
    }

    for (const key in styles) {
      if (styles.hasOwnProperty(key)) {
        this.el.nativeElement.style[key] = styles[key];
      }
    }
  }
}
