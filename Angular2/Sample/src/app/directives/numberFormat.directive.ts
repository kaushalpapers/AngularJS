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

  propVal = 'Default';

  @Input()
  get appNumberFormat() {
    return this.propVal;
  }

  @Output()
  appNumberFormatChange = new EventEmitter();

  set appNumberFormat(val) {
    this.propVal = val;
    this.appNumberFormatChange.emit(this.propVal);
  }

  constructor(private ele: ElementRef, private logSvc: LogService, private ngModel: NgModel, private currencyPipe: MyCurrencyPipe) { }

  ngOnInit() {
    this.logSvc.log(this.propVal);
    let val = this.propVal;
    val = this.numberWithCommas(val);
    this.ele.nativeElement.value = val;
    // this.logSvc.log('NumberFormat loaded.');
    // this.ngModel.valueChanges.subscribe((value) => {
    //   this.logSvc.log('Before: ' + value);
    //   this.ele.nativeElement.value = this.numberWithCommas(value);
    //   this.logSvc.log('After: ' + this.ele.nativeElement.value);
    // });
  }

  // @HostListener('document:click', ['$event'])
  @HostListener('keyup', ['$event'])
  handleClick(event: any) {
    this.updateValue();
    // return this.validateNumber(event);
  }

  updateValue() {
    let val = this.ele.nativeElement.value;
    val = val.replace(new RegExp(',', 'g'), '');
    this.appNumberFormat = val;
    val = this.numberWithCommas(val);
    this.ele.nativeElement.value = val;
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
    } else if (key < 48 || key > 57) {
      return false;
    } else {
      return true;
    }
  }

}
