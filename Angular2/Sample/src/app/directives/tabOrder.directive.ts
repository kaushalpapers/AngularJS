import { Directive } from '@angular/core';

@Directive({
  selector: '[appTabOrder]'
})
export class TabOrderDirective {

  constructor() { }

  @ViewChildren(TabOrderItemDirective) listTabOrderItemDirective: QueryList<TabOrderItemDirective>;

  tabOrderItemBlur(index: int, group: string) {

  }


}