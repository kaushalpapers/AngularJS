import { Directive } from '@angular/core';

@Directive({
  selector: '[appTabOrderItem]'
})
export class TabOrderItemDirective {

  constructor() { }

  element: any;

  @Input
  tabOrderIndex: int;

  @Input
  tabOrderGroup: string;

  @Output
  tabOrderItemBlur = new EventEmmiter<int, string>();

  ngOnInIt(e: ElementRef) {
    this.element = e;
  }

  @HostListener('blur')
  handleBlur() {
    this.tabOrderItemBlur.emit(this.tabOrderIndex, this.tabOrderGroup);
  }

}
