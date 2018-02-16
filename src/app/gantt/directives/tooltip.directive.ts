import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({selector: '[appTooltipDirective]'})
export class TooltipDirective {
  @Input() public text: string;
  @Input() public position = 'top';
  @Input() public show: boolean;
  private isClear = true;
  private element: any;
  private document = window.document;
  private offset = 25;
  private top: number;
  private left: number;
  constructor(private el: ElementRef,
  private render: Renderer2) {
  }

  @HostListener('mouseover', ['$event']) onMouseHover(event: MouseEvent) {
    if (this.show) {
      if (!this.isClear) {
        return;
      }
      this.init();
    }
  }
  @HostListener('mouseleave') hideTooltip() {
    this.isClear = true;
    this.deleteElement();
  }

  private init() {
    switch (this.position) {
      case 'top':
        this.createElement();
        this.calculatePositionTop();
      break;
      case 'left':
        this.createElement();
        this.calculatePositionLeft();
      break;
      case 'right':
        this.createElement();
        this.calculatePositionRight();
      break;
      case 'bottom':
        this.createElement();
        this.calculatePositionBottom();
        break;
    }
  }

  private createElement() {
    const position: any = this.getOffset(this.el.nativeElement);
    this.top = position.top;
    this.left = position.left;
    this.element = this.render.createElement('div');
    this.addStyle();
    this.element.innerHTML = this.text;
    this.render.appendChild(this.document.body, this.element);
  }

  private addStyle() {
    this.element.style.cssText = `
    position: absolute;
    z-index: 999;
    box-sizing: border-box;
    background-color: #313131;
    padding: 2px 6px;
    text-align: center;
    color: #f7f7f7;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 1px;`;
  }

  private calculatePositionTop() {
    this.element.style.top = this.top - this.offset  + 'px';
    this.element.style.left = this.left - ((this.element.offsetWidth / 2) - this.el.nativeElement.offsetWidth / 2) + 'px';
  }

  private calculatePositionBottom() {
    this.element.style.top = this.top + this.offset  + 'px';
    this.element.style.left = this.left - ((this.element.offsetWidth / 2) - this.el.nativeElement.offsetWidth / 2) + 'px';
  }

  private calculatePositionLeft() {
    this.element.style.top = this.top  + 'px';
    this.element.style.left = this.left - this.element.offsetWidth - (this.offset / 2)  + 'px';
  }

  private calculatePositionRight() {
    this.element.style.top = this.top  + 'px';
    this.element.style.left = this.left + this.el.nativeElement.offsetWidth + (this.offset / 2)    + 'px';
  }

  private deleteElement() {
    this.render.removeChild(this.document.body, this.element);
  }

  private getOffset(elem) {
    if (elem.getBoundingClientRect) {
      // "правильный" вариант
      return this.getOffsetRect(elem);
    } else {
      // пусть работает хоть как-то
      return this.getOffsetSum(elem);
    }
  }

  private getOffsetSum(elem) {
    let top = 0, left = 0;
    while (elem) {
      top = top + parseInt(elem.offsetTop, 2);
      left = left + parseInt(elem.offsetLeft, 2);
      elem = elem.offsetParent;
    }

    return {top: top, left: left};
  }

  private getOffsetRect(elem) {
    // (1)
    const box = elem.getBoundingClientRect();

    // (2)
    const body = document.body;
    const docElem = document.documentElement;

    // (3)
    const scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    const scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    // (4)
    const clientTop = docElem.clientTop || body.clientTop || 0;
    const clientLeft = docElem.clientLeft || body.clientLeft || 0;

    // (5)
    const top  = box.top +  scrollTop - clientTop;
    const left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
  }
}
