import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { elementAt } from 'rxjs/operator/elementAt';
import { concat } from 'rxjs/observable/concat';
import { MyCurrencyPipe } from '../pipes/currency.pipe';
import { NgModel } from '@angular/forms';
import { element } from 'protractor/built';
import { retry } from 'rxjs/operator/retry';
import { LogService } from '../services/log.service';
import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appNumberFormat]',
  providers: [NgModel]
})
export class NumberFormatDirective implements OnInit {

  element: any;
  propVal = 'Default';

  @Input()
  decimalUpTo = 0;

  @Input()
  maxValue: number = null;

  @Input()
  minValue: number = null;

  @Input()
  get appNumberFormat() {
    return this.propVal;
  }

  @Output()
  appNumberFormatChange = new EventEmitter();

  set appNumberFormat(val) {
    this.propVal = val;
    this.ele.nativeElement.value = this.numberWithCommas(this.propVal);
    this.appNumberFormatChange.emit(this.propVal);
  }

  constructor(private ele: ElementRef, private logSvc: LogService, private ngModel: NgModel, private currencyPipe: MyCurrencyPipe) {
    this.element = this.ele.nativeElement;
  }

  ngOnInit() {
    let val = this.propVal;
    val = this.numberWithCommas(val);
    this.ele.nativeElement.value = val;
  }

  // @HostListener('document:click', ['$event'])
  @HostListener('keydown', ['$event'])
  handleKeyDown(event: any) {
    this.logSvc.log(event.keyCode);
    const txtVal: string = this.element.value;

    if (this.decimalUpTo === 0 && event.keyCode === 190) {
      return false;
    }

    if (event.keyCode === 8 || event.keyCode === 37 ||
      event.keyCode === 46 || event.keyCode === 36 ||
      event.keyCode === 35 || event.keyCode === 39) {
      return true;
    }
    if (!this.validateNumber(event)) {
      return false;
    }

    if (event.keyCode === 190 && txtVal.indexOf('.') > -1) {
      return false;
    }

    const start = this.element.selectionStart;
    const end = this.element.selectionEnd;

    if (txtVal.split('.').length > 1 && txtVal.split('.')[1].length >= this.decimalUpTo && start > txtVal.indexOf('.')) {
      return false;
    }

    // Max/Min calculation
    const num = this.constructNumber(event.key);
    if (this.maxValue && num > this.maxValue) {
      return false;
    }

    if (this.minValue && num < this.minValue) {
      return false;
    }
  }

  @HostListener('keyup', ['$event'])
  handleKeyup(event: any) {
    this.updateValue();
  }


  updateValue() {
    let start = this.element.selectionStart;
    let end = this.element.selectionEnd;
    // this.logSvc.log('start:' + start + ', end:' + end);
    let val = this.ele.nativeElement.value;
    const numberOfCommasBefore = (val.match(/,/g) || []).length;

    val = val.replace(new RegExp(',', 'g'), '');
    this.appNumberFormat = val;
    val = this.numberWithCommas(val);

    const numberOfCommasAfter = (val.match(/,/g) || []).length;

    this.createFakeDelay();
    this.createFakeDelay();
    this.createFakeDelay();
    this.createFakeDelay();
    this.createFakeDelay();
    this.createFakeDelay();
    this.createFakeDelay();
    this.createFakeDelay();
    this.createFakeDelay();
    this.createFakeDelay();
    this.createFakeDelay();

    this.ele.nativeElement.value = val;

    if (numberOfCommasAfter > numberOfCommasBefore) {
      start++; end++;
    }
    setTimeout(() => {
      this.ele.nativeElement.setSelectionRange(start, end);
    }, 0);

  }

  createFakeDelay() {
    const key = Math.random();
    localStorage.setItem(key.toString(), key + 'sdf');
    const a = localStorage.getItem(key.toString());
  }

  numberWithCommas(x) {
    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  validateNumber(event) {
    const key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46 || event.keyCode === 190) {
      return true;
    } else if (!((key >= 48 && key <= 57) || (key >= 96 && key <= 105))) {
      return false;
    } else {
      return true;
    }
  }

  constructNumber(key) {
    return parseFloat(this.ele.nativeElement.value.replace(new RegExp(',', 'g'), '') + key);
  }

}
