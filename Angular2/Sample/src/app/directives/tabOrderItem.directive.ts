import { transition } from '@angular/animations';
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appTabOrderItem]'
})
export class TabOrderItemDirective {

  constructor(private _element: ElementRef) {
    this.element = _element.nativeElement;
  }

  element: any;
  isShiftPressed = false;
  isTabPressed = false;

  @Input()
  tabOrderGroup: string;

  @Input()
  tabOrderIndex: number;

  @Output()
  tabOrderItemBlur = new EventEmitter();

  ngOnInIt(e: ElementRef) {
    this.element = e;
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown($event: any) {
    this.isShiftPressed = $event.shiftKey;
    this.isTabPressed = $event.keyCode === 9;
  }

  @HostListener('blur', ['$event'])
  handleBlur($event: any) {
    if (this.isTabPressed) {
      this.tabOrderItemBlur.emit({ index: this.tabOrderIndex, group: this.tabOrderGroup, isShiftKeyPressed: this.isShiftPressed });
      this.resetKeyState();
    }
  }

  focus() {
    this.element.focus();
  }

  private resetKeyState() {
    this.isTabPressed = false;
    this.isShiftPressed = false;
  }
}
