import { TabOrderItemDirective } from './tabOrderItem.directive';
import { AfterContentInit, ContentChild, ContentChildren, Directive, QueryList, ViewChildren } from '@angular/core';
import * as _ from 'lodash';

@Directive({
  selector: '[appTabOrder]'
})
export class TabOrderDirective implements AfterContentInit {

  constructor() { }

  @ContentChildren(TabOrderItemDirective)
  listTabOrderItemDirective: QueryList<TabOrderItemDirective>;

  ngAfterContentInit() {
    this.listTabOrderItemDirective.forEach((item) => {
      item.tabOrderItemBlur.subscribe((selected: any) => {
        const _tabOrderItems = this.listTabOrderItemDirective.filter((o: TabOrderItemDirective) => o.tabOrderGroup === selected.group);
        if (_tabOrderItems.length > 0) {
          const next: TabOrderItemDirective = this.FindNext(_tabOrderItems, selected.index, selected.isShiftKeyPressed);
          next.focus();
        }
      });
    });
  }

  FindNext(_tabOrderItems: TabOrderItemDirective[], currentIndex: number, isReverseDirection: boolean): TabOrderItemDirective {
    let nextIndex = 1;
    if (isReverseDirection) {
      nextIndex = (currentIndex - 1) < 1 ? _tabOrderItems.length : (currentIndex - 1);
    } else {
      nextIndex = (currentIndex + 1) > _tabOrderItems.length ? 1 : (currentIndex + 1);
    }
    const next: TabOrderItemDirective = _tabOrderItems.find((o: TabOrderItemDirective) => o.tabOrderIndex === nextIndex);
    return next;
  }
}
