import { PubSubService } from '../shared/pubsub.service';
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[appTabOrderItem]'
})
export class TabOrderItemDirective {

  constructor(private _element: ElementRef, private pubSubService: PubSubService) {
    this.element = _element.nativeElement;
    this.subscribe();
  }

  element: any;
  isShiftPressed = false;
  isTabPressed = false;

  @Input()
  tabOrderGroup: string;

  @Input()
  isGroupMaxIndex = false;

  @Input()
  isGroupMinIndex = false;

  @Input()
  tabOrderIndex: number;

  @Output()
  tabOrderItemBlur = new EventEmitter();

  ngOnInIt() {

  }

  @HostListener('keydown', ['$event'])
  handleKeyDown($event: any) {
    this.isShiftPressed = $event.shiftKey;
    this.isTabPressed = $event.keyCode === 9;
    if (this.isTabPressed) {
      this.pubSubService.publish('TabChanged',
        {
          index: this.tabOrderIndex,
          group: this.tabOrderGroup,
          isReverseDirection: this.isShiftPressed,
          isMaxIndex: this.isGroupMaxIndex,
          isMinIndex: this.isGroupMinIndex
        });
      this.resetKeyState();
      return false;
    }
  }

  private subscribe() {
    this.pubSubService.subscribe('TabChanged', (selected) => {
      if (this.tabOrderGroup !== selected.group) {
        return;
      }

      if (!selected.isReverseDirection) {
        if (selected.isMaxIndex && this.isGroupMinIndex) {
          this.focus(selected);
        } else if ((selected.index + 1) === this.tabOrderIndex) {
          this.focus(selected);
        }
      } else {
        if (selected.isMinIndex && this.isGroupMaxIndex) {
          this.focus(selected);
        } else if ((selected.index - 1) === this.tabOrderIndex) {
          this.focus(selected);
        }
      }
    });

  }

  focus(selected: any) {
    if (this.mIHiddenOrDisabled()) {
      this.pubSubService.publish('TabChanged',
        {
          index: this.tabOrderIndex,
          group: selected.group,
          isReverseDirection: selected.isReverseDirection,
          isMaxIndex: this.isGroupMaxIndex,
          isMinIndex: this.isGroupMinIndex
        });
    } else {
      this.element.focus();
    }
  }

  private resetKeyState() {
    this.isTabPressed = false;
    this.isShiftPressed = false;
  }

  private mIHiddenOrDisabled() {
    return $(this.element).prop('disabled') || !$(this.element).is(':visible');
  }
}

 // @HostListener('blur', ['$event'])
  // handleBlur($event: any) {
  //   if (this.isTabPressed) {
  //     this.tabOrderItemBlur.emit({ index: this.tabOrderIndex, group: this.tabOrderGroup, isShiftKeyPressed: this.isShiftPressed });
  //     this.resetKeyState();
  //   }
  // }
